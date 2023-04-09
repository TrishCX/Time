import isPlural from "./plural.js";
let s = 1000;
let m = s * 60;
let h = m * 60;
let d = h * 24;
let w = d * 7;
let y = d * 365.25;

export default function formatLong(ms: number) {
  let msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return isPlural(ms, msAbs, d, "day");
  }
  if (msAbs >= h) {
    return isPlural(ms, msAbs, h, "hour");
  }
  if (msAbs >= m) {
    return isPlural(ms, msAbs, m, "minute");
  }
  if (msAbs >= s) {
    return isPlural(ms, msAbs, s, "second");
  }
  return ms + " ms";
}
