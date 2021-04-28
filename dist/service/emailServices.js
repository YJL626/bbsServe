'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailServices = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mail_config_1 = require("../config/mail.config");
class MailServices {
    constructor() {
        const transporter = nodemailer_1.default.createTransport(mail_config_1.sendAccountConfig);
        this.send = async (config) => {
            try {
                await transporter.sendMail({
                    from: mail_config_1.sendAccountConfig.auth.user,
                    ...config,
                });
                return true;
            }
            catch {
                return false;
            }
        };
    }
}
const mailServices = new MailServices();
exports.mailServices = mailServices;
