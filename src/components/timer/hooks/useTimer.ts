import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getFirestoreRefObject, getTimeGap } from "@/api/userAPI";
import { formatTimeGap, formatTimestamp } from "@/utils/timeFormatter";

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
  useEffect(() => {
    async function initUserObject() {
      const { userRef } = await getFirestoreRefObject();
      const userData = (await userRef.get()).docs[0].data();

      const gap = await getTimeGap(limit);
      if (typeof gap !== "number" || gap >= oneMinite) return;

      setFormattedTimeGap(formatTimeGap(gap));
      setLastTime(formatTimestamp(userData.lastDrawTime));
      setIsOverLimit(gap <= 0);
    }

    initUserObject();
  }, [limit, oneMinite]);

  // 타이머 인터벌
  useEffect(() => {
    const interval = setInterval(async () => {
      const gap = await getTimeGap(limit);
      if (typeof gap !== "number" || gap >= oneMinite) return;

      setFormattedTimeGap(formatTimeGap(gap));
      setIsOverLimit(gap <= 0);
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
