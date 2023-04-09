import type { Options } from "../../typings/Library/FormatDate.js";
export default function getReadableTime(value: number, options?: Options) {
  if (options?.formatted) {
    let milliseconds: number = value * 1000;
    let dateObject: Date = new Date(milliseconds);
    return dateObject
      .toLocaleString("en-us", {
        year: "numeric",
        month: "numeric",
        day: "2-digit",
      })
      .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2");
  } else {
    let milliseconds: number = value * 1000;
    let dateObject: Date = new Date(milliseconds);
    return dateObject;
  }
}
