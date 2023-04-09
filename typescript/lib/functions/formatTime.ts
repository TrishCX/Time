import { weekDays } from "../../common/extras/weekdays.js";
import throwError from "../../errors/throw.js";

export default function formatTime(value: string | Date) {
  if (!value)
    return throwError({
      title: "No value!",
      message: `Specify a time to format.`,
      verbose: true,
    });
  const date = new Date(value);
  let h = date.getHours(),
    m = date.getMinutes(),
    l = "AM";
  if (!h)
    throw new RangeError(
      "Not a valid date, The date you specified is a invalid date!"
    );
  if (h > 12) {
    h = h - 12;
  }
  if (h < 10) {
    h = 0 + h;
  }
  if (m < 10) {
    m = 0 + m;
  }
  if (date.getHours() >= 12) {
    l = "PM";
  } else {
    l = "AM";
  }

  return h + ":" + m + " " + l;
}
