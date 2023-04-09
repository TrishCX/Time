export default function formatNumbers(value: number) {
  if (value! > 1000) {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixValues = Math.floor(("" + value).length / 3);
    const shortValue = "";
    const normalizedValue = value! / Math?.pow(1000, suffixValues);
    let precious = 2;
    if (normalizedValue < 1) precious = 1;
    return `${normalizedValue.toPrecision(precious)}${suffixes[suffixValues]}`;
  } else return String(value);
}
