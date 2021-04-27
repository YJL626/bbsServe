import { EMAIL_AUTH_PASS, EMAIL_AUTH_USER } from './env'

const sendAccountConfig = {
  host: 'smtp.qq.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL_AUTH_USER, // generated ethereal user
    pass: EMAIL_AUTH_PASS, // generated ethereal password
  },
}

export { sendAccountConfig }
