"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateForgetPwd = exports.generateRegisterMail = void 0;
const env_1 = require("../config/env");
const generateRegisterMail = (to, token) => {
    return {
        to,
        html: `<body>
            <h2> RegisterMail: 
              <a href="${env_1.FRONTEND_URL}/#/user/create?token=${token}"> 点击注册,十五分钟内有效 </a>
            </h2>
          </body>`,
        subject: 'Register',
    };
};
exports.generateRegisterMail = generateRegisterMail;
const generateForgetPwd = (to, token) => {
    return {
        to,
        html: `<body>
            <h2> Forget password Mail: </h2>
              <a href="${env_1.FRONTEND_URL}/#/changePwd?token=${token}"> 点击找回密码,十五分钟内有效 </a>
          </body>`,
        subject: '找回密码',
    };
};
exports.generateForgetPwd = generateForgetPwd;
//# sourceMappingURL=email.template.js.map