import isPlural from "./plural.js";
import formatLong from "./longFormat.js";
import parse from "./parser.js";

export default function createMs(val: string) {
  return parse(val);
}
