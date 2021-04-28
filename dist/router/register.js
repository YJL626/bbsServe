"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const registerController_1 = require("../controller/registerController");
const middleware_1 = require("../middleware/middleware");
const verifyMiddleware_1 = require("../middleware/verifyMiddleware");
const registerRouter = new koa_router_1.default();
exports.registerRouter = registerRouter;
//首次用户传过来数据验证通过后进行验证，然后给用户发送mail，然后用户点击mail创建user
registerRouter.post('/register', verifyMiddleware_1.verify.reqBodyIntegrity(['name', 'nickName', 'email', 'pwd']), registerController_1.registerController.verifyEmail, registerController_1.registerController.verifyName, registerController_1.registerController.sendRegisterEmail);
registerRouter.post('/register/create', verifyMiddleware_1.verify.tokenIntegrity(['name', 'nickName', 'email', 'pwd']), middleware_1.tokenDateCopyToRequestBody, registerController_1.registerController.verifyEmail, registerController_1.registerController.verifyName, registerController_1.registerController.create);
