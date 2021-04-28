"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const mailController_1 = require("../controller/mailController");
const mailRouter = new koa_router_1.default();
exports.mailRouter = mailRouter;
mailRouter.get('/mail', async (ctx, next) => {
    ctx.body = [10];
    const a = new mailController_1.MailCtl().send({
        to: '909861220@qq.com',
        html: '<button>haha</button>',
        subject: 'hello',
    });
    await next();
});
