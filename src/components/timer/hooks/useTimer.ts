import { useEffect, useState } from "react";

import { getFirestoreRefObject, getTimeGap } from "@/api/userAPI";
import { formatTimeGap, formatTimestamp } from "@/utils/timeFormatter";

export default function useTimer() {
  const [lastTime, setLastTime] = useState("");
  const [timeGap, setTimeGap] = useState("");
  const [isOverHour, setIsOverHour] = useState(false);

  const oneHour = 60 * 60 * 1000;
  // const oneHour = 60;

  useEffect(() => {
    async function initUserObject() {
      const { userRef } = await getFirestoreRefObject();
      const userData = (await userRef.get()).docs[0].data();

      const gap = await getTimeGap();
      setTimeGap(formatTimeGap(gap));
      setLastTime(formatTimestamp(userData.lastDrawTime));
      setIsOverHour(gap <= oneHour);
    }

    initUserObject();
  }, [oneHour]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const gap = await getTimeGap();
      setTimeGap(formatTimeGap(gap));
      setIsOverHour(gap <= oneHour);
    }, 1000);

    return () => clearInterval(interval);
  }, [oneHour]);

  return { lastTime, timeGap, isOverHour };
}
