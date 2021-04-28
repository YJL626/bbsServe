"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const errorType_1 = require("../constants/errorType");
class RegisterController {
    async verifyDataIntegrity(ctx, next) {
        const reqBody = ctx.request.body;
        console.log(reqBody);
        if (reqBody &&
            reqBody.uname &&
            reqBody.email &&
            reqBody.pwd &&
            reqBody.nickName) {
            await next();
        }
        else {
            ctx.app.emit('error', errorType_1.DATA_FORM_ERROR, ctx);
        }
    }
    async verifyUname() { }
    async verifyEmail() { }
}
const registerController = new RegisterController();
exports.registerController = registerController;
