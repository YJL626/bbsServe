"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
class AuthController {
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
