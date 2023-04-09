"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(options) {
    const message = `${options.title}\n- ${options.message}`;
    throw new Error(message);
}
exports.default = throwError;
