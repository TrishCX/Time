export default function isValidDate(date: string | Date) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (date?.toString().match(regex) === null) return false;
  let newDate = new Date(`${date}`);
  const timeStamp = newDate?.getTime();
  if (typeof timeStamp !== "number" || Number?.isNaN(timeStamp)) return false;
  else return newDate?.toISOString()?.startsWith(`${date}`);
}
