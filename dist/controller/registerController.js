"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const emailServices_1 = require("../service/emailServices");
const email_template_1 = require("../template/email.template");
const errorType_1 = require("../constants/errorType");
const userServices_1 = require("../service/userServices");
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
class RegisterController {
    async verifyEmail(ctx, next) {
        const emailIsExits = await userServices_1.userServices.emailIsExits(ctx.request.body.email);
        if (emailIsExits) {
            return ctx.app.emit('error', errorType_1.EMAIL_ALREADY_EXISTS, ctx);
        }
        await next();
    }
    async verifyName(ctx, next) {
        const nameIsExits = await userServices_1.userServices.nameIsExits(ctx.request.body.name);
        if (nameIsExits) {
            return ctx.app.emit('error', errorType_1.USER_ALREADY_EXISTS, ctx);
        }
        await next();
    }
    async sendRegisterEmail(ctx, next) {
        const token = await jsonwebtoken_1.myJwt.sign(ctx.request.body, 60 * 15);
        const state = await emailServices_1.mailServices.send(email_template_1.generateRegisterMail(ctx.request.body.email, token));
        if (state) {
            ctx.body = 'sendToUserMail';
        }
        else {
            ctx.app.emit('error', errorType_1.INTERNAL_EMAIL_SERVE_ERROR, ctx);
        }
    }
    async create(ctx, next) {
        const result = await userServices_1.userServices.createUser(ctx.request.body);
        if (result) {
            ctx.status = 201;
            ctx.body = '注册成功';
        }
        else {
            ctx.app.emit('emit', errorType_1.INTERNAL_USER_CREATE_FAILED_ERROR, ctx);
        }
    }
}
const registerController = new RegisterController();
exports.registerController = registerController;
