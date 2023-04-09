"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatMilliseconds(milliseconds) {
    const totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    const totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    const totalHours = parseInt(Math.floor(totalMinutes / 60));
    const days = parseInt(Math.floor(totalHours / 24));
    const seconds = parseInt((totalSeconds % 60));
    const minutes = parseInt((totalMinutes % 60));
    const hours = parseInt((totalHours % 24));
    const ms = parseInt((milliseconds % 1000));
    const result = {
        days,
        hours,
        milliseconds: ms,
        minutes,
        seconds,
    };
    return result;
}
exports.default = formatMilliseconds;
