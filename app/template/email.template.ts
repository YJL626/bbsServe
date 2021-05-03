import { FRONTEND_URL } from '../config/env'

const generateRegisterMail = (to: string, token: String) => {
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

export { generateRegisterMail }
