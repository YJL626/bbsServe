"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const registerController_1 = require("../controller/registerController");
const registerRouter = new koa_router_1.default();
exports.registerRouter = registerRouter;
registerRouter.post('/register', registerController_1.registerController.verifyDataIntegrity);
