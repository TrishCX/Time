import { TypedEmitter as EventEmitter } from "tiny-typed-emitter";
import type { TimerEvents } from "../typings/Timer/TimerEvents.js";
import createMs from "../utils/helpers/tinyConverter.js";
import {
  formatMilliseconds,
  getReadableTime,
  getUnix,
  getCurrentFormattedTime,
} from "../lib/export/index.js";
import { Events } from "../typings/Enums/Event.js";
import { Milliseconds } from "../typings/Library/MillisecondsParser.js";

export default class Timer extends EventEmitter<TimerEvents> {
  constructor(time: string) {
    super();
    if (!time) throw new Error("No time specified.");
    const syncedMs = createMs(time) as number;
    const setTime = formatMilliseconds(syncedMs) as Milliseconds;
    const setOn = getCurrentFormattedTime();
    setTimeout(() => {
      this.emit(Events.TimeSet, setTime, setOn);
      setTimeout(() => {
        this.emit(Events.EndTime, setOn);
      }, syncedMs);
    }, createMs("0.1ms"));
  }
}
