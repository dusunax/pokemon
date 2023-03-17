import { TimerReturnType } from "./hooks/useTimer";

export default function Timer({ timer }: { timer: TimerReturnType }) {
  const { timeGapText, lastDrawText, isOverLimit, LIMIT } = timer;
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
        />
        {lastDrawText}
      </div>

      <p className="text-indigo-600 h-6">
        {!isOverLimit &&
          timeGapText &&
          `${LIMIT / 60 / 1000}분 제한까지 ${timeGapText}`}
      </p>
    </div>
  );
}
