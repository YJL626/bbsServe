"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const verifyMiddleware_1 = require("../middleware/verifyMiddleware");
const koa_router_1 = __importDefault(require("koa-router"));
const authController_1 = require("../controller/authController");
const loginRouter = new koa_router_1.default();
exports.loginRouter = loginRouter;
loginRouter.post('/login/email', verifyMiddleware_1.verify.emailLogin, authController_1.authController.login);
