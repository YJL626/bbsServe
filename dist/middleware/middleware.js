"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryDateCopyToRequestBody = exports.tokenDateCopyToRequestBody = void 0;
const tokenDateCopyToRequestBody = async (ctx, next) => {
    ctx.request.body = ctx.state.user;
    await next();
};
exports.tokenDateCopyToRequestBody = tokenDateCopyToRequestBody;
const queryDateCopyToRequestBody = async (ctx, next) => {
    ctx.request.body = Object.assign({}, ctx.request.query);
    await next();
};
exports.queryDateCopyToRequestBody = queryDateCopyToRequestBody;
//# sourceMappingURL=middleware.js.map