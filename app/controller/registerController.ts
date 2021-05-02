import { Next, ParameterizedContext } from 'koa'
import { mailServices } from '../service/emailServices'
import { generateRegisterMail } from '../template/email.template'
import {
  EMAIL_ALREADY_EXISTS,
  USER_ALREADY_EXISTS,
  INTERNAL_EMAIL_SERVE_ERROR,
  INTERNAL_USER_CREATE_FAILED_ERROR,
} from '../constants/errorType'
import { userServices } from '../service/userServices'
import { join } from 'node:path'
import { myJwt } from '../utils/jsonwebtoken'
import { createContext } from 'node:vm'
class RegisterController {
  async verifyEmail(ctx: ParameterizedContext, next: Next) {
    const emailIsExits = await userServices.emailIsExits(ctx.request.body.email)
    if (emailIsExits) {
      return ctx.app.emit('error', EMAIL_ALREADY_EXISTS, ctx)
    }
    await next()
  }
  async verifyName(ctx: ParameterizedContext, next: Next) {
    const nameIsExits = await userServices.nameIsExits(ctx.request.body.name)
    if (nameIsExits) {
      return ctx.app.emit('error', USER_ALREADY_EXISTS, ctx)
    }
    await next()
  }
  async sendRegisterEmail(ctx: ParameterizedContext, next: Next) {
    const token = await myJwt.sign(ctx.request.body, 60 * 15)
    const state = await mailServices.send(
      generateRegisterMail(ctx.request.body.email, token)
    )
    if (state) {
      ctx.body = 'sendToUserMail'
    } else {
      ctx.app.emit('error', INTERNAL_EMAIL_SERVE_ERROR, ctx)
    }
  }
  async create(ctx: ParameterizedContext, next: Next) {
    const result = await userServices.createUser(ctx.request.body)
    if (result) {
      ctx.status = 201
      ctx.body = '注册成功'
    } else {
      ctx.app.emit('emit', INTERNAL_USER_CREATE_FAILED_ERROR, ctx)
    }
  }
  async backUnused(ctx: ParameterizedContext, next: Next) {
    ctx.status = 200
    ctx.body = 'unused'
  }
}
const registerController = new RegisterController()
export { registerController }
