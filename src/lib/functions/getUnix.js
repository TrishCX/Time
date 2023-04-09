"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../errors/index.js");
const tinyConverter_js_1 = __importDefault(require("../../utils/helpers/tinyConverter.js"));
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
function getUnix(time) {
    if (!time)
        return (0, index_js_1.throwError)({
            title: `No time specified!`,
            message: `You need to specify at least something in order to convert to a unix epoch time.`,
            verbose: true,
        });
    if (typeof time !== "number") {
        const response = (0, tinyConverter_js_1.default)(time);
        const date = new Date();
        const unixResponse = date.setMilliseconds(date.getMilliseconds() + response);
        const newDate = new Date(unixResponse);
        const cleanUnix = Math.floor(newDate / 1000);
        return cleanUnix;
    }
    else {
        const date = new Date();
        const unixResponse = date.setMilliseconds(date.getMilliseconds() + time);
        const newDate = new Date(unixResponse);
        const cleanUnix = Math.floor(newDate / 1000);
        return cleanUnix;
    }
}
exports.default = getUnix;
