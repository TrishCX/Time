"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weekdays_js_1 = require("../../common/extras/weekdays.js");
const months_js_1 = require("../../common/extras/months.js");
const pad2_js_1 = require("../../utils/helpers/pad2.js");
function getCurrentFormattedTime(options) {
    if (options?.short) {
        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const date = new Date();
        const day = (0, pad2_js_1.pad2)(date.getDate()); //day (1-31)
        const formattedTime = (0, pad2_js_1.pad2)(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
            ":" +
            (0, pad2_js_1.pad2)(date.getMinutes()) +
            " " +
            (date.getHours() >= 12 ? "PM" : "AM");
        const today = weekday[date.getDay()];
        const formattedMonth = months[date.getMonth()];
        const formattedDate = `${formattedMonth} ${day}, ${today} ${formattedTime}`;
        return formattedDate;
    }
    else {
        const date = new Date();
        const day = (0, pad2_js_1.pad2)(date.getDate()); //day (1-31)
        const formattedTime = (0, pad2_js_1.pad2)(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
            ":" +
            (0, pad2_js_1.pad2)(date.getMinutes()) +
            " " +
            (date.getHours() >= 12 ? "PM" : "AM");
        const today = weekdays_js_1.weekDays[date.getDay()];
        const formattedMonth = months_js_1.monthNames[date.getMonth()];
        const formattedDate = `${formattedMonth} ${day}, ${today} ${formattedTime}`;
        return formattedDate;
    }
}
exports.default = getCurrentFormattedTime;
