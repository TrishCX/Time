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
export default function getUnix(time: string | number): number | void;
