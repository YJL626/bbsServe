import { FRONTEND_URL } from '../config/env'

const generateRegisterMail = (to: string, token: string) => {
  return {
    to,
    html: `<body>
            <h2> RegisterMail: 
              <a href="${FRONTEND_URL}/#/user/create?token=${token}"> 点击注册,十五分钟内有效 </a>
            </h2>
          </body>`,
    subject: 'Register',
  }
}
const generateForgetPwd = (to: string, token: string) => {
  return {
    to,
    html: `<body>
            <h2> Forget password Mail: </h2>
              <a href="${FRONTEND_URL}/#/changePwd?token=${token}"> 点击找回密码,十五分钟内有效 </a>
          </body>`,
    subject: '找回密码',
  }
}

export { generateRegisterMail, generateForgetPwd }
