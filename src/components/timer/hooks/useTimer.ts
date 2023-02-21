import { useEffect, useState } from "react";

import { getFirestoreRefObject, getTimeGap } from "@/api/userAPI";
import { formatTimeGap, formatTimestamp } from "@/utils/timeFormatter";

export default function useTimer() {
  const [lastTime, setLastTime] = useState("");
  const [timeGap, setTimeGap] = useState("");
  const [isOverLimit, setIsOverLimit] = useState(false);

  const oneHour = 60 * 60 * 1000;
  const fiveMinite = 1 * 60 * 1000;
  const limit = fiveMinite;

  // 초기화
  useEffect(() => {
    async function initUserObject() {
      const { userRef } = await getFirestoreRefObject();
      const userData = (await userRef.get()).docs[0].data();

      const gap = await getTimeGap(limit);
      setTimeGap(formatTimeGap(gap));
      setLastTime(formatTimestamp(userData.lastDrawTime));
      setIsOverLimit(gap <= 0);
    }

    initUserObject();
  }, [limit]);

  // 초기화
  useEffect(() => {
    const interval = setInterval(async () => {
      const gap = await getTimeGap(limit);
      setTimeGap(formatTimeGap(gap));
      setIsOverLimit(gap <= 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [limit]);

  return { lastTime, timeGap, isOverLimit, limit };
}
