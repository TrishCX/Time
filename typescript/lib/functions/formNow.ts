import { throwError } from "../../errors/index.js";

export default function fromNow(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value);
  const formatter = new Intl.RelativeTimeFormat("en");
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  } as any;
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  if (!secondsElapsed)
    throw new RangeError(
      "Invalid date specified, The date you specified is invalid!"
    );
  for (let key in ranges) {
    if (ranges[`${key}`] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];

      return formatter.format(Math.round(delta), key as any);
    }
  }
}
