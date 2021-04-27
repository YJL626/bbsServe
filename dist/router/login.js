"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const authorization_1 = require("../middleware/authorization");
const loginRouter = new koa_router_1.default();
exports.loginRouter = loginRouter;
loginRouter.post('/login/email', authorization_1.verifyEmailLogin, async (ctx, next) => {
    const token = await jsonwebtoken_1.myJwt
        .sign({ uid: ctx.request.body.uid }, '5d')
        .catch((err) => {
        console.log(err);
    });
    ctx.body = {
        nickName: ctx.request.body.nickName,
        token,
    };
});
