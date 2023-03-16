import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getFirestoreRefObject, getTimeGap } from "@/api/userAPI";
import { formatTimeGap, formatTimestamp } from "@/utils/timeFormatter";
import { useAsync } from "react-use";

export interface TimerReturnType {
  lastTime: string;
  timeGap: string;
  isOverLimit: boolean;
  setIsOverLimit: Dispatch<SetStateAction<boolean>>;
  limit: number;
}

export default function useTimer(): TimerReturnType {
  const [lastTime, setLastTime] = useState("");
  const [formattedTimeGap, setFormattedTimeGap] = useState("");
  const [isOverLimit, setIsOverLimit] = useState(false);

  const oneHour = 60 * 60 * 1000;
  const oneMinite = 1 * 60 * 1000;
  const limit = oneMinite;

  // 컴포넌트 amount => 타이머 초기화
  // useEffect -> useAsync
  useAsync(async () => {
    const { userRef } = await getFirestoreRefObject();
    const userData = (await userRef.get()).docs[0].data();

    const gap = await getTimeGap(limit);
    if (typeof gap !== "number" || gap >= oneMinite || gap === 0) return;

    setFormattedTimeGap(formatTimeGap(gap));
    setLastTime(formatTimestamp(userData.lastDrawTime));
    setIsOverLimit(gap < 0);
  }, [limit, oneMinite]);

  // 타이머 인터벌
  useEffect(() => {
    const interval = setInterval(async () => {
      const gap = await getTimeGap(limit);
      if (typeof gap !== "number" || gap >= oneMinite || isOverLimit) return;

      setFormattedTimeGap(formatTimeGap(gap));

      //! 이부분에서 isOverLimit가 false -> false로 set될때 useEffect가 recall될 것으로 예상됩니다.
      // setIsOverLimit(gap < 0);

      //! 아래 로직으로 수정해서 isOverLimit과 gap < 0의 값이 다를때만 갱신
      if (gap < 0 !== isOverLimit) {
        setIsOverLimit(gap < 0);
      }
    }, 1000);

    if (isOverLimit) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [limit, isOverLimit, oneMinite]);

  return {
    lastTime,
    timeGap: formattedTimeGap,
    isOverLimit,
    setIsOverLimit,
    limit,
  };
}
