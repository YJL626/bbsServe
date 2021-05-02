"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRegisterMail = void 0;
const generateRegisterMail = (to, href) => {
    return {
        to,
        html: `<body><h2> RegisterMail:  ${href} </h2></body>`,
        subject: 'Register',
    };
};
exports.generateRegisterMail = generateRegisterMail;
//# sourceMappingURL=email.template.js.map