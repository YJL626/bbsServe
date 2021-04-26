"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const loginRouter = new koa_router_1.default();
exports.loginRouter = loginRouter;
loginRouter.post('/login', async (ctx, next) => {
    const data = await jsonwebtoken_1.myJwt.sign({ 10: 10 }, 1 * 60);
    console.log(ctx.state.user);
    ctx.body = data;
});
