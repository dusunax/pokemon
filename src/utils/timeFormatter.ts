import { Timestamp } from "firebase/firestore";

function getTimeHHMM(inputTimeString: Date | Timestamp) {
  const dateObj =
    inputTimeString instanceof Timestamp
      ? inputTimeString.toDate()
      : new Date(inputTimeString);
  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatTimestamp(timestamp: { seconds: number; nanoseconds: number }) {
  const date = new Date(timestamp.seconds * 1000);
  return `${date.toLocaleString("ko-KR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })} ${getTimeHHMM(date)}`;
}

function formatTimeGap(timeGap: number) {
  if (timeGap < 0) return "";

  const hours = Math.floor(timeGap / (60 * 60 * 1000))
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeGap / (60 * 1000)) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((timeGap / 1000) % 60)
    .toString()
    .padStart(2, "0");
  return `${hours}시간 ${minutes}분 ${seconds}초`;
}

export { getTimeHHMM, formatTimestamp, formatTimeGap };
