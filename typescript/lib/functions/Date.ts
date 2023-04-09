import type { DateResponse } from "../../typings/Library/DateOptions.js";

export default function date(date?: string | Date) {
  const value = date as string | Date;

  const returnObject: DateResponse = {
    isBefore: (input) => {
      if (!value) {
        const today = new Date();
        const specifiedDate = new Date(input);
        return specifiedDate < today;
      } else {
        const specifiedDate = new Date(input);
        const anotherDate = new Date(value);
        return specifiedDate < anotherDate;
      }
    },
    isAfter: (input) => {
      if (!value) {
        const today = new Date();
        const specifiedDate = new Date(input);
        return specifiedDate > today;
      } else {
        const specifiedDate = new Date(input);
        const anotherDate = new Date(value);
        return specifiedDate > anotherDate;
      }
    },
    relative: (input) => {
      if (value) {
        const valuation = new Date(input);
        const backDate = new Date(value);
        const date = value instanceof Date ? value : valuation;
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
        const secondsElapsed = (date.getTime() - backDate.getTime()) / 1000;
        if (!secondsElapsed)
          throw new RangeError(
            "Invalid date specified, The date you specified is invalid!"
          );
        const a: string[] = [];
        for (let key in ranges) {
          if (ranges[`${key}`] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key];
            a.push(formatter.format(Math.round(delta), key as any));
            return formatter.format(Math.round(delta), key as any);
          }
        }
        return a[0];
      } else {
        const date = new Date(input);
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
        const a: string[] = [];
        for (let key in ranges) {
          if (ranges[`${key}`] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key];
            a.push(formatter.format(Math.round(delta), key as any));
            return formatter.format(Math.round(delta), key as any);
          }
        }
        return a[0];
      }
    },
    isInTheFuture: (input) => {
      if (!value) {
        const today = new Date();
        const specifiedDate = new Date(input);
        return specifiedDate > today;
      } else {
        const specifiedDate = new Date(input);
        const anotherDate = new Date(value);

        return specifiedDate > anotherDate;
      }
    },
    isInThePast: (input) => {
      if (!value) {
        const today = new Date();
        const specifiedDate = new Date(input);
        return specifiedDate < today;
      } else {
        const specifiedDate = new Date(input);
        const anotherDate = new Date(value);
        return specifiedDate < anotherDate;
      }
    },
  };
  return returnObject;
}
