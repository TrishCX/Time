import { throwError } from "../../errors/index.js";
import createMs from "../../utils/helpers/tinyConverter.js";

/**
 * @default
 * @Converts the given time to a unix epoch-timestamp.
 * @param {string | number} time The specified value.
 * @throws {Error} When no time specified or when the time is wrong.
 * @since v0
 * @returns {number}
 * @example
  ```ts
  const value:string|number = "1m";
  const response = getUnix(value);
  console.log(response);
  ```
 */

export default function getUnix(time: string | number) {
  if (!time)
    return throwError({
      title: `No time specified!`,
      message: `You need to specify at least something in order to convert to a unix epoch time.`,
      verbose: true,
    });
  if (typeof time !== "number") {
    const response = createMs(time) as number;
    const date = new Date();
    const unixResponse = date.setMilliseconds(
      date.getMilliseconds() + response
    );
    const newDate = new Date(unixResponse);
    const cleanUnix = Math.floor((newDate as unknown as any) / 1000);
    return cleanUnix;
  } else {
    const date = new Date();
    const unixResponse = date.setMilliseconds(date.getMilliseconds() + time);
    const newDate = new Date(unixResponse);
    const cleanUnix = Math.floor((newDate as unknown as any) / 1000);
    return cleanUnix;
  }
}
