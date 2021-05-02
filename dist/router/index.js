"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesAllowedMethods = exports.routers = void 0;
const koa_compose_1 = __importDefault(require("koa-compose"));
const utils_1 = require("../utils/utils");
//读取当前目录全部的router；
const routerArr = utils_1.readDirModules(__dirname, [
    /^index/,
    /.map/,
]).filter((router) => utils_1.isRouter(router));
//对routers进行compose
const routers = koa_compose_1.default(routerArr.map((item) => item.routes()));
exports.routers = routers;
//对AllowedMethods进行compose
const routesAllowedMethods = koa_compose_1.default(routerArr.map((item) => item.allowedMethods()));
exports.routesAllowedMethods = routesAllowedMethods;
//# sourceMappingURL=index.js.map