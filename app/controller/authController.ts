import { Next, ParameterizedContext } from 'koa'
import { userModel } from '../service/database'
import { INCORRECT_USERNAME_OR_PASSWORD } from '../constants/errorType'
import { myJwt } from '../utils/jsonwebtoken'
class AuthController {
  async verifyEmailLogin(ctx: ParameterizedContext, next: Next) {
    //不存在则报错return
    if (!ctx.request.body.email || !ctx.request.body.password) {
      return ctx.app.emit(
        'error',
        INCORRECT_USERNAME_OR_PASSWORD,
        ctx
      )
    }
    //查询数据库
    const result = await userModel.findOne(ctx.request.body)
    if (result) {
      //认证通过将uid传递下去
      ctx.request.body = {
        uid: result._id,
        nickName: (result as any).nickName,
      }
      await next()
    } else {
      return ctx.app.emit(
        'error',
        INCORRECT_USERNAME_OR_PASSWORD,
        ctx
      )
    }
  }
  async login(ctx: ParameterizedContext, next: Next) {
    const token = await myJwt
      .sign({ uid: ctx.request.body.uid, login: 'login' }, '5d')
      .catch((err) => {
        console.log(err)
      })
    ctx.body = {
      nickName: ctx.request.body.nickName,
      token,
    }
  }
}
const authController = new AuthController()
export { authController }
