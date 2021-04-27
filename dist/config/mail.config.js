"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAccountConfig = void 0;
const env_1 = require("./env");
const sendAccountConfig = {
    host: 'smtp.qq.com',
    port: 587,
    secure: false,
    auth: {
        user: env_1.EMAIL_AUTH_USER,
        pass: env_1.EMAIL_AUTH_PASS, // generated ethereal password
    },
};
exports.sendAccountConfig = sendAccountConfig;
