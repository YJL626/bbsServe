"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const koa_1 = __importDefault(require("koa"));
const koa_body_1 = __importDefault(require("koa-body"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_jwt_1 = __importDefault(require("koa-jwt"));
const errHandle_1 = require("./errHandle");
const delay_1 = require("./middleware/delay");
const index_1 = require("./router/index");
const app = new koa_1.default();
//parser和跨域设置
const jwtMiddleWare = koa_jwt_1.default({
    secret: fs_1.readFileSync('./key/rsa_public.key'),
}).unless({ path: [/\/login\/email/, /^\/register$/] });
app
    .use(koa_body_1.default())
    .use(cors_1.default())
    .use(jwtMiddleWare)
    .use(delay_1.delay)
    .use(index_1.routers)
    .use(index_1.routesAllowedMethods)
    .on('error', errHandle_1.errHandle);
//模拟网络请求给服务器设置延迟
app.listen(8000, () => console.log('success'));
