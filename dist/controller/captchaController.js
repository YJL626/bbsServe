"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.captchaController = void 0;
const svg_captcha_1 = __importDefault(require("svg-captcha"));
class CaptchaController {
    get() {
        return svg_captcha_1.default.create();
    }
}
const captchaController = new CaptchaController();
exports.captchaController = captchaController;
