"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_js_1 = __importDefault(require("./parser.js"));
function createMs(val) {
    return (0, parser_js_1.default)(val);
}
exports.default = createMs;
