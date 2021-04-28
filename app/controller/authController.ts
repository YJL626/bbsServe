import { Next, ParameterizedContext } from 'koa'
import { userModel } from '../service/database'
import { INCORRECT_USERNAME_OR_PASSWORD } from '../constants/errorType'
import { myJwt } from '../utils/jsonwebtoken'
class AuthController {
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
