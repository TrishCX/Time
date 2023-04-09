"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function secondsToDuration(seconds) {
    var date = new Date(seconds * 1000);
    if (date.toString() === "Invalid Date")
        throw new Error("Not a valid date specified!");
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    if (hh < 10) {
        hh = ("0" + hh);
    }
    if (mm < 10) {
        mm = ("0" + mm);
    }
    if (ss < 10) {
        ss = ("0" + ss);
    }
    const time = hh ? hh === "00" : mm + ss;
    if (time) {
        return `${mm}:${ss}`;
    }
    else {
        return `${hh}:${mm}:${ss}`;
    }
}
exports.default = secondsToDuration;
