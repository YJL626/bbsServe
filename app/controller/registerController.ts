import { Next, ParameterizedContext } from 'koa'
import { DATA_FORM_ERROR } from '../constants/errorType'
class RegisterController {
  async verifyDataIntegrity(ctx: ParameterizedContext, next: Next) {
    const reqBody = ctx.request.body
    console.log(reqBody)
    if (
      reqBody &&
      reqBody.uname &&
      reqBody.email &&
      reqBody.pwd &&
      reqBody.nickName
    ) {
      await next()
    } else {
      ctx.app.emit('error', DATA_FORM_ERROR, ctx)
    }
  }
  async verifyUname() {}
  async verifyEmail() {}
}
const registerController = new RegisterController()
export { registerController }
