"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.days = exports.months = exports.ordinalSuffix = exports.createMs = void 0;
__exportStar(require("./lib/export/index.js"), exports);
__exportStar(require("./typings/index.js"), exports);
var tinyConverter_js_1 = require("./utils/helpers/tinyConverter.js");
Object.defineProperty(exports, "createMs", { enumerable: true, get: function () { return __importDefault(tinyConverter_js_1).default; } });
var ordinalSuffix_js_1 = require("./common/suffixes/ordinalSuffix.js");
Object.defineProperty(exports, "ordinalSuffix", { enumerable: true, get: function () { return __importDefault(ordinalSuffix_js_1).default; } });
var months_js_1 = require("./common/extras/months.js");
Object.defineProperty(exports, "months", { enumerable: true, get: function () { return months_js_1.monthNames; } });
var weekdays_js_1 = require("./common/extras/weekdays.js");
Object.defineProperty(exports, "days", { enumerable: true, get: function () { return weekdays_js_1.weekDays; } });
