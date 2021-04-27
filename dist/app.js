"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const index_1 = require("./router/index");
const cors_1 = __importDefault(require("@koa/cors"));
const koa_jwt_1 = __importDefault(require("koa-jwt"));
const fs_1 = require("fs");
const app = new koa_1.default();
//parser和跨域设置
const jwtMiddleWare = koa_jwt_1.default({
    secret: fs_1.readFileSync('./key/rsa_public.key'),
}).unless({ path: [/^\/mail/] });
app
    .use(koa_bodyparser_1.default())
    .use(cors_1.default())
    .use(jwtMiddleWare)
    .use(index_1.routers)
    .use(index_1.routesAllowedMethods);
//模拟网络请求给服务器设置延迟
app.use(async (ctx, next) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(0);
        }, 200);
    });
    await next();
});
app.listen(8000, () => console.log('success'));
