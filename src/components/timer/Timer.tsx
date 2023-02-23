import { TimerReturnType } from "./hooks/useTimer";

export default function Timer({ timer }: { timer: TimerReturnType }) {
  const { lastTime, timeGap, isOverLimit, limit } = timer;
  return (
    <div>
      <div>
        <div
          className={
            "w-3 h-3 rounded-lg inline-block mx-2" +
            (isOverLimit
              ? " bg-green-400 animate-pulse animate-ping"
              : " bg-rose-600 animate-pulse")
          }
        ></div>
        {lastTime}
      </div>

      <p className="text-indigo-600 h-6">
        {isOverLimit ? "" : `${limit / 60 / 1000}분 제한까지 ${timeGap}`}
      </p>
    </div>
  );
}
