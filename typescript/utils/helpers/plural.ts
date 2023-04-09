export default function isPlural(
  ms: number,
  abs: number,
  numeric: any,
  name: string
) {
  var isPlural = abs >= numeric * 1.5;
  return Math.round(ms / numeric) + " " + name + (isPlural ? "s" : "");
}
