"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.captchaRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const captchaController_1 = require("../controller/captchaController");
const captchaRouter = new koa_router_1.default();
exports.captchaRouter = captchaRouter;
captchaRouter.get('/captcha', async (ctx, next) => {
    ctx.body = captchaController_1.captchaController.get();
    await next();
});
