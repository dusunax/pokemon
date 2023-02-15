import { getTimeGap } from "@/api/userAPI";
import useTimer from "./hooks/useTimer";

export default function Timer() {
  const { lastTime, timeGap, isOverHour } = useTimer();

  return (
    <div>
      <p>
        <div
          className={
            "w-3 h-3 rounded-lg inline-block mx-2" +
            (isOverHour ? " bg-green-400" : " bg-rose-600")
          }
        ></div>
        last draw : {lastTime}
        <div
          className={
            "w-3 h-3 rounded-lg inline-block mx-2" +
            (isOverHour ? " bg-green-400" : " bg-rose-600")
          }
        ></div>
      </p>

      <p className="text-indigo-600 h-6">
        {isOverHour ? "" : `1시간 까지 ${timeGap}`}
      </p>
    </div>
  );
}
