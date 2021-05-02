"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const delay = async (ctx, next) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(0);
        }, 200);
    });
    await next();
};
exports.delay = delay;
//# sourceMappingURL=delay.js.map