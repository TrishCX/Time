"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plural_js_1 = __importDefault(require("./plural.js"));
let s = 1000;
let m = s * 60;
let h = m * 60;
let d = h * 24;
let w = d * 7;
let y = d * 365.25;
function formatLong(ms) {
    let msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return (0, plural_js_1.default)(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
        return (0, plural_js_1.default)(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
        return (0, plural_js_1.default)(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
        return (0, plural_js_1.default)(ms, msAbs, s, "second");
    }
    return ms + " ms";
}
exports.default = formatLong;
