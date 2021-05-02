"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL_AUTH_PASS = exports.EMAIL_AUTH_USER = exports.USER_DATE_BASE = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const USER_DATE_BASE = process.env.USER_DATE_BASE || '';
exports.USER_DATE_BASE = USER_DATE_BASE;
const EMAIL_AUTH_USER = process.env.EMAIL_AUTH_USER || '';
exports.EMAIL_AUTH_USER = EMAIL_AUTH_USER;
const EMAIL_AUTH_PASS = process.env.EMAIL_AUTH_PASS || '';
exports.EMAIL_AUTH_PASS = EMAIL_AUTH_PASS;
//# sourceMappingURL=env.js.map