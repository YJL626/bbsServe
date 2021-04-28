"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = void 0;
const errorType_1 = require("../constants/errorType");
const database_1 = require("../service/database");
const utils_1 = require("../utils/utils");
class Verify {
    reqBodyIntegrity(model) {
        return async function properExist(ctx, next) {
            try {
                const reqBody = ctx.request.body;
                //检测reqBody的结构和model是否一致
                let isIntegrity = Array.isArray(model)
                    ? model.every((property) => reqBody.hasOwnProperty([property]))
                    : utils_1.checkObjectForm(model, reqBody);
                if (isIntegrity) {
                    //结构符合预期则next
                    await next();
                }
                else {
                    ctx.app.emit('error', errorType_1.DATA_FORM_ERROR, ctx);
                    ctx.app.emit('error', errorType_1.DATA_FORM_ERROR, ctx);
                }
            }
            catch (err) {
                console.log('internalErr reqBodyIntegrity ', err);
            }
        };
    }
    async emailLogin(ctx, next) {
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
}
const verify = new Verify();
exports.verify = verify;
