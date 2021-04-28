"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const errorType_1 = require("../constants/errorType");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const userServices_1 = require("../service/userServices");
class AuthController {
    async login(ctx, next) {
        const result = (await userServices_1.userServices.emailPwdFind(ctx.request.body));
        if (!result) {
            //没有查到则return
            return ctx.app.emit('error', errorType_1.INCORRECT_USERNAME_OR_PASSWORD, ctx);
        }
        //认证通过将uid传递下去
        const token = await jsonwebtoken_1.myJwt
            .sign({ uid: result._id, nickName: result.nickName }, '5d')
            .catch((err) => {
            console.log(err);
        });
        ctx.body = {
            nickName: result.nickName,
            token,
        };
    }
}
const authController = new AuthController();
exports.authController = authController;
