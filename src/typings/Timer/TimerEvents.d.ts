interface RemainingTime {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
export interface TimerEvents {
    "set-time": (remainingTime: RemainingTime, formatted?: string) => any;
    "end-time": (setOn: string) => any;
}
export {};
