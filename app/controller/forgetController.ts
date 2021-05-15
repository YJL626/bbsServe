import { Next, ParameterizedContext } from 'koa'
import {
  EMAIL_NOT_EXISTS,
  INTERNAL_EMAIL_SERVE_ERROR,
  INTERNAL_FORGET_CTR_SERVE_ERROR,
} from '../constants/errorType'
import { mailServices } from '../service/emailServices'
import { userServices } from '../service/userServices'
import { generateForgetPwd } from '../template/email.template'
import { myJwt } from '../service/jsonwebtoken'

class ForgetController {
  async checkEmailExist(ctx: ParameterizedContext, next: Next) {
    const result = await userServices.emailIsExits(ctx.request.body.email)
    if (result) {
      await next()
    } else {
      ctx.app.emit('error', EMAIL_NOT_EXISTS)
    }
  }
  async sendPwdMail(ctx: ParameterizedContext, next: Next) {
    const email = ctx.request.body.email as string
    const token = await myJwt
      .sign({ email, forgetPwd: 'forgetPwd' }, 1000 * 50)
      .catch(() => ctx.app.emit('error', INTERNAL_EMAIL_SERVE_ERROR) + '')
    mailServices.send(generateForgetPwd(email, token))
    ctx.body = 'send mail success'
    ctx.status = 200
    await next()
  }
  async changePwd(ctx: ParameterizedContext, next: Next) {
    const email = ctx.state.user.email
    const pwd = ctx.request.body.pwd
    const isSuccess = await userServices.changePwd({ email, pwd })
    if (isSuccess) {
      ctx.status = 200
      ctx.body = 'changed'
      await next()
    } else {
      ctx.app.emit('error', INTERNAL_FORGET_CTR_SERVE_ERROR)
    }
  }
}
const forgetController = new ForgetController()
export { forgetController }
