import useTimer from "./hooks/useTimer";

export default function Timer() {
  const { isOverOneHour, lastTime } = useTimer();

  console.log(lastTime);

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold text-center">Timer</h1>
      <p>1시간이 지났나요 {isOverOneHour() ? "네" : "아니요"}</p>
    </div>
  );
}
