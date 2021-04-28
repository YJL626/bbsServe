"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenDateCopyToRequestBody = void 0;
const tokenDateCopyToRequestBody = async (ctx, next) => {
    ctx.request.body = ctx.state.user;
    await next();
};
exports.tokenDateCopyToRequestBody = tokenDateCopyToRequestBody;
