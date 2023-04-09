import { TypedEmitter as EventEmitter } from "tiny-typed-emitter";
import type { TimerEvents } from "../typings/Timer/TimerEvents.js";
export default class Timer extends EventEmitter<TimerEvents> {
    constructor(time: string);
}
