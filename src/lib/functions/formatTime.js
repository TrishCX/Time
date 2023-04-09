"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const throw_js_1 = __importDefault(require("../../errors/throw.js"));
function formatTime(value) {
    if (!value)
        return (0, throw_js_1.default)({
            title: "No value!",
            message: `Specify a time to format.`,
            verbose: true,
        });
    const date = new Date(value);
    let h = date.getHours(), m = date.getMinutes(), l = "AM";
    if (!h)
        throw new RangeError("Not a valid date, The date you specified is a invalid date!");
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
    }
    else {
        l = "AM";
    }
    return h + ":" + m + " " + l;
}
exports.default = formatTime;
