"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const database_1 = require("../service/database");
const errorType_1 = require("../constants/errorType");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
class AuthController {
    async verifyEmailLogin(ctx, next) {
        //不存在则报错return
        if (!ctx.request.body.email || !ctx.request.body.password) {
            return ctx.app.emit('error', errorType_1.INCORRECT_USERNAME_OR_PASSWORD, ctx);
        }
        //查询数据库
        const result = await database_1.userModel.findOne(ctx.request.body);
        if (result) {
            //认证通过将uid传递下去
            ctx.request.body = {
                uid: result._id,
                nickName: result.nickName,
            };
            await next();
        }
        else {
            return ctx.app.emit('error', errorType_1.INCORRECT_USERNAME_OR_PASSWORD, ctx);
        }
    }
    async login(ctx, next) {
        const token = await jsonwebtoken_1.myJwt
            .sign({ uid: ctx.request.body.uid, login: 'login' }, '5d')
            .catch((err) => {
            console.log(err);
        });
        ctx.body = {
            nickName: ctx.request.body.nickName,
            token,
        };
    }
}
const authController = new AuthController();
exports.authController = authController;
