import { useEffect, useState } from "react";

import { getFirestoreRefObject, getTimeGap } from "@/api/userAPI";
import { getTimeHHMM } from "@/utils/getTimeHHMM";

export default function useTimer() {
  const [lastTime, setLastTime] = useState("00:00:00");
  const [timeGap, setTimeGap] = useState(0);
  const oneHour = 60 * 60 * 1000;

  useEffect(() => {
    async function initUserObject() {
      const { userRef } = await getFirestoreRefObject();
      const userData = (await userRef.get()).docs[0].data();

      const gap = await getTimeGap();
      setTimeGap(gap);
      setLastTime(userData.lastDrawTime);
    }

    initUserObject();
  }, []);

  const isOverOneHour = () => {
    return timeGap >= oneHour;
  };

  return { lastTime, isOverOneHour };
}
