import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";

import { getFirestoreRefObject } from "@/services/userAPI";
import {
  formatTimeGapToLocalString,
  formatTimestampWithColon,
} from "@/utils/timeFormatter";

export interface TimerReturnType {
  timeGapText: string;
  lastDrawText: string;
  isOverLimit: boolean;
  setIsOverLimit: Dispatch<SetStateAction<boolean>>;
  LIMIT: number;
}

const ONE_HOUR = 60 * 60 * 1000;
const ONE_MINITE = 1 * 60 * 1000;
const LIMIT = ONE_MINITE;

export default function useTimer(): TimerReturnType {
  const [loading, setIsLoading] = useState(false);
  const [lastDrawTimestamp, setLastDrawTimestamp] = useState<
    Timestamp | undefined
  >();
  const [isOverLimit, setIsOverLimit] = useState(false);

  // 화면에 출력할 텍스트
  const [timeGapText, setTimeGapText] = useState("");
  const [lastDrawText, setLastDrawText] = useState("😃");

  /**
   * 현재 Date와, 마지막 타임스탬프 간의 시간 차이를 구합니다.
   * */
  const getTimeGap = async (limit: number, lastTimestamp: Timestamp) => {
    const lastDrawDate = new Date(
      lastTimestamp.seconds * 1000 + lastTimestamp.nanoseconds / 1000000
    );

    const now = new Date();
    const elapsed = now.getTime() - lastDrawDate.getTime();
    const remaining = limit - elapsed;

    return remaining;
  };

  /** <타이머 초기화>
   * 0. 컴포넌트가 amount하면 타이머를 초기화합니다.
   * 1. firebase에서 lastDrawTime를 패칭합니다.
   * 2. 현재 시간과의 gap을 구합니다.
   * 3. 화면에 출력할 timeGapText, lastDrawText
   *    그리고 타이머 기능에 사용할 lastDrawTimestamp, isOverLimit를
   *    초기화합니다.
   * 4. 별개의 useEffect인 인터벌 기능이 작동해
   *    isOverLimit가 변화하면 다시 초기화합니다.
   * */
  useEffect(() => {
    setIsLoading(true);

    (async function () {
      const { userRef } = await getFirestoreRefObject();
      const userData = (await userRef.get()).docs[0].data();
      const timestamp: Timestamp = userData.lastDrawTime;

      const gap = await getTimeGap(LIMIT, timestamp);
      if (typeof gap !== "number" || gap >= ONE_MINITE || gap === 0) return;

      setTimeGapText(formatTimeGapToLocalString(gap));
      setLastDrawText(formatTimestampWithColon(timestamp));

      setLastDrawTimestamp(timestamp);
      setIsOverLimit(gap < 0);

      setIsLoading(false);
    })();
  }, [isOverLimit]);

  /** <타이머 인터벌>
   * lastDrawTimestamp이 존재하고, loading 중이 아닐 때 인터벌합니다.
   * 1초마다 gap을 확인하고, 관련 state를 업데이트 합니다.
   * isOverLimit이 변경되었을 때, true라면 interval을 clear합니다.
   */
  useEffect(() => {
    const interval = setInterval(async () => {
      if (!lastDrawTimestamp || loading) return;

      const gap = await getTimeGap(LIMIT, lastDrawTimestamp);
      if (typeof gap !== "number") throw new Error("타이머 에러");

      const newIsOver = gap < 0;
      if (newIsOver) {
        setTimeGapText("");
        !isOverLimit && setIsOverLimit(true);
      } else {
        setTimeGapText(formatTimeGapToLocalString(gap));
        isOverLimit && setIsOverLimit(false);
      }
    }, 1000);

    // interval clear
    if (isOverLimit) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isOverLimit, lastDrawTimestamp, loading]);

  return {
    timeGapText,
    lastDrawText,
    isOverLimit,
    setIsOverLimit,
    LIMIT,
  };
}
