"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const index_1 = require("./app/router/index");
const cors_1 = __importDefault(require("@koa/cors"));
const app = new koa_1.default();
app.use(koa_bodyparser_1.default()).use(cors_1.default()).use(index_1.routers());
app.listen(8000, () => console.log("success"));
