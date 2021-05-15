import { Next, ParameterizedContext } from 'koa'
import { INCORRECT_USERNAME_OR_PASSWORD } from '../constants/errorType'
import { myJwt } from '../service/jsonwebtoken'
import { userServices } from '../service/userServices'
class AuthController {
  async login(ctx: ParameterizedContext, next: Next) {
    const result = (await userServices.emailPwdFind(ctx.request.body)) as any
    if (!result) {
      //没有查到则return
      return ctx.app.emit('error', INCORRECT_USERNAME_OR_PASSWORD, ctx)
    }
    //认证通过将uid传递下去
    const token = await myJwt
      .sign({ uid: result._id, nickName: result.nickName }, '5d')
      .catch((err) => {
        console.log(err)
      })
    ctx.body = {
      nickName: result.nickName,
      token,
    }
    await next()
  }
}
const authController = new AuthController()
export { authController }
