"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getReadableTime(value, options) {
    if (options?.formatted) {
        let milliseconds = value * 1000;
        let dateObject = new Date(milliseconds);
        return dateObject
            .toLocaleString("en-us", {
            year: "numeric",
            month: "numeric",
            day: "2-digit",
        })
            .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2");
    }
    else {
        let milliseconds = value * 1000;
        let dateObject = new Date(milliseconds);
        return dateObject;
    }
}
exports.default = getReadableTime;
