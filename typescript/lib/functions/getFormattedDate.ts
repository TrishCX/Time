import { formats } from "../../constants/formats.js";
import { separators } from "../../constants/separator.js";
import { throwError } from "../../errors/index.js";
import { FormatOptions } from "../../typings/Library/Formats.js";
import ordinalSuffix from "../../common/suffixes/ordinalSuffix.js";
import { monthNames } from "../../common/extras/months.js";

export default function getFormattedDate(
  value: string | Date,
  options?: FormatOptions
) {
  const initialFormat = !options?.format ? "YY:MM:DD" : options?.format;
  const initialSeparator = !options?.separator ? "/" : options?.separator;

  if (!value)
    return throwError({
      title: "No value specified.",
      message: "Please specify a value/date.",
      verbose: true,
    });
  if (!separators.includes(initialSeparator))
    return throwError({
      title: "Not a valid separator.",
      message:
        "The separator you specified is not included in the separators array.",
      verbose: true,
    });
  if (!formats.includes(initialFormat))
    return throwError({
      title: "Invalid date format specified!",
      message:
        "The date format you specified is not included in the formats array.",
      verbose: true,
    });

  const date = new Date(value);
  const mm = date.getMonth();
  const ss = date.getSeconds();
  const yy = date.getFullYear();
  const mins = date.getMinutes();
  const dd = date.getDate();
  const hh = date.getHours();
  const day = ordinalSuffix(dd);
  const monthName = mm + 1;
  const autoFormatter = `${day} ${monthNames[mm]}, ${yy}`;
  return initialFormat === "HH:MM:SS"
    ? `${hh}:${mins}:${ss}`
    : initialFormat === "MM:DD"
    ? `${monthName}${initialSeparator}${dd}`
    : initialFormat === "YY:MM:DD"
    ? `${yy}${initialSeparator}${monthName}${initialSeparator}${dd}`
    : autoFormatter;
}
