"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formats_js_1 = require("../../constants/formats.js");
const separator_js_1 = require("../../constants/separator.js");
const index_js_1 = require("../../errors/index.js");
const ordinalSuffix_js_1 = __importDefault(require("../../common/suffixes/ordinalSuffix.js"));
const months_js_1 = require("../../common/extras/months.js");
function getFormattedDate(value, options) {
    const initialFormat = !options?.format ? "YY:MM:DD" : options?.format;
    const initialSeparator = !options?.separator ? "/" : options?.separator;
    if (!value)
        return (0, index_js_1.throwError)({
            title: "No value specified.",
            message: "Please specify a value/date.",
            verbose: true,
        });
    if (!separator_js_1.separators.includes(initialSeparator))
        return (0, index_js_1.throwError)({
            title: "Not a valid separator.",
            message: "The separator you specified is not included in the separators array.",
            verbose: true,
        });
    if (!formats_js_1.formats.includes(initialFormat))
        return (0, index_js_1.throwError)({
            title: "Invalid date format specified!",
            message: "The date format you specified is not included in the formats array.",
            verbose: true,
        });
    const date = new Date(value);
    const mm = date.getMonth();
    const ss = date.getSeconds();
    const yy = date.getFullYear();
    const mins = date.getMinutes();
    const dd = date.getDate();
    const hh = date.getHours();
    const day = (0, ordinalSuffix_js_1.default)(dd);
    const monthName = mm + 1;
    const autoFormatter = `${day} ${months_js_1.monthNames[mm]}, ${yy}`;
    return initialFormat === "HH:MM:SS"
        ? `${hh}:${mins}:${ss}`
        : initialFormat === "MM:DD"
            ? `${monthName}${initialSeparator}${dd}`
            : initialFormat === "YY:MM:DD"
                ? `${yy}${initialSeparator}${monthName}${initialSeparator}${dd}`
                : autoFormatter;
}
exports.default = getFormattedDate;
