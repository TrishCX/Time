"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let s = 1000;
let m = s * 60;
let h = m * 60;
let d = h * 24;
function shortFormat(ms) {
    let msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + "s";
    }
    return ms + "ms";
}
exports.default = shortFormat;
