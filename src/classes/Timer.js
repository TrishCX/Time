"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const tinyConverter_js_1 = __importDefault(require("../utils/helpers/tinyConverter.js"));
const index_js_1 = require("../lib/export/index.js");
const Event_js_1 = require("../typings/Enums/Event.js");
class Timer extends tiny_typed_emitter_1.TypedEmitter {
    constructor(time) {
        super();
        if (!time)
            throw new Error("No time specified.");
        const syncedMs = (0, tinyConverter_js_1.default)(time);
        const setTime = (0, index_js_1.formatMilliseconds)(syncedMs);
        const setOn = (0, index_js_1.getCurrentFormattedTime)();
        setTimeout(() => {
            this.emit(Event_js_1.Events.TimeSet, setTime, setOn);
            setTimeout(() => {
                this.emit(Event_js_1.Events.EndTime, setOn);
            }, syncedMs);
        }, (0, tinyConverter_js_1.default)("0.1ms"));
    }
}
exports.default = Timer;
