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
  return getTimeHHMM(date);
}

export { getTimeHHMM, formatTimestamp };
