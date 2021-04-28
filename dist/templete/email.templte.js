"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRegisterMail = void 0;
const generateRegisterMail = (to, href) => {
    return {
        to,
        html: `<h4> RegisterMail:  ${href} </ h4>`,
        subject: 'Register',
    };
};
exports.generateRegisterMail = generateRegisterMail;
