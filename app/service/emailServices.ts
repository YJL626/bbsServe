'use strict'
import nodemailer from 'nodemailer'
import { sendAccountConfig } from '../config/mail.config'
import { mailAcceptConfig } from '../type'
class MailServices {
  //发送mail成功为true错误为false
  send: { (config: mailAcceptConfig): Promise<boolean> }
  constructor() {
    const transporter = nodemailer.createTransport(sendAccountConfig)
    this.send = async (config) => {
      try {
        await transporter.sendMail({
          from: sendAccountConfig.auth.user,
          ...config,
        })
        return true
      } catch {
        return false
      }
    }
  }
}
const mailServices = new MailServices()
export { mailServices }
