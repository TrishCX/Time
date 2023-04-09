import type { Options } from "../../typings/Library/CurrentFormat.js";
import { weekDays } from "../../common/extras/weekdays.js";
import { monthNames } from "../../common/extras/months.js";
import { pad2 } from "../../utils/helpers/pad2.js";

export default function getCurrentFormattedTime(options?: Options) {
  if (options?.short) {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    const day = pad2(date.getDate()); //day (1-31)
    const formattedTime =
      pad2(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
      ":" +
      pad2(date.getMinutes()) +
      " " +
      (date.getHours() >= 12 ? "PM" : "AM");
    const today = weekday[date.getDay()];
    const formattedMonth = months[date.getMonth()];
    const formattedDate = `${formattedMonth} ${day}, ${today} ${formattedTime}`;
    return formattedDate;
  } else {
    const date = new Date();
    const day = pad2(date.getDate()); //day (1-31)
    const formattedTime =
      pad2(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
      ":" +
      pad2(date.getMinutes()) +
      " " +
      (date.getHours() >= 12 ? "PM" : "AM");
    const today = weekDays[date.getDay()];
    const formattedMonth = monthNames[date.getMonth()];
    const formattedDate = `${formattedMonth} ${day}, ${today} ${formattedTime}`;
    return formattedDate;
  }
}
