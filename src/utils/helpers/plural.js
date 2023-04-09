"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPlural(ms, abs, numeric, name) {
    var isPlural = abs >= numeric * 1.5;
    return Math.round(ms / numeric) + " " + name + (isPlural ? "s" : "");
}
exports.default = isPlural;
