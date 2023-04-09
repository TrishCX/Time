import type { Milliseconds } from "../../typings/Library/MillisecondsParser.js";
export default function formatMilliseconds(milliseconds: number) {
  const totalSeconds = parseInt(Math.floor(milliseconds / 1000) as any);
  const totalMinutes = parseInt(Math.floor(totalSeconds / 60) as any);
  const totalHours = parseInt(Math.floor(totalMinutes / 60) as any);
  const days = parseInt(Math.floor(totalHours / 24) as any);
  const seconds = parseInt((totalSeconds % 60) as any);
  const minutes = parseInt((totalMinutes % 60) as any);
  const hours = parseInt((totalHours % 24) as any);
  const ms = parseInt((milliseconds % 1000) as any);

  const result: Milliseconds = {
    days,
    hours,
    milliseconds: ms,
    minutes,
    seconds,
  };
  return result as Milliseconds;
}
