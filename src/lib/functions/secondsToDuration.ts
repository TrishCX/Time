export default function secondsToDuration(seconds: string | number) {
  var date = new Date((seconds as number) * 1000);

  if (date.toString() === "Invalid Date")
    throw new Error("Not a valid date specified!");
  var hh = date.getUTCHours();
  var mm = date.getUTCMinutes();
  var ss = date.getSeconds();
  if (hh < 10) {
    hh = ("0" + hh) as any;
  }
  if (mm < 10) {
    mm = ("0" + mm) as any;
  }
  if (ss < 10) {
    ss = ("0" + ss) as any;
  }

  const time = hh ? hh === ("00" as any) : mm + ss;
  if (time) {
    return `${mm}:${ss}`;
  } else {
    return `${hh}:${mm}:${ss}`;
  }
}
