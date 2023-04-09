"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (date?.toString().match(regex) === null)
        return false;
    let newDate = new Date(`${date}`);
    const timeStamp = newDate?.getTime();
    if (typeof timeStamp !== "number" || Number?.isNaN(timeStamp))
        return false;
    else
        return newDate?.toISOString()?.startsWith(`${date}`);
}
exports.default = isValidDate;
