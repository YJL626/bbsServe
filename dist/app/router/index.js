"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const koa_combine_routers_1 = __importDefault(require("koa-combine-routers"));
const captcha_1 = require("./captcha");
const routers = koa_combine_routers_1.default(captcha_1.captchaRouter);
exports.routers = routers;
