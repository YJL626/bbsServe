import Router from 'koa-router'
import { myJwt } from '../utils/jsonwebtoken'
import { verifyEmailLogin } from '../middleware/authorization'
const loginRouter = new Router()
loginRouter.post(
  '/login/email',
  verifyEmailLogin,
  async (ctx, next) => {
    const token = await myJwt
      .sign({ uid: ctx.request.body.uid }, '5d')
      .catch((err) => {
        console.log(err)
      })
    ctx.body = {
      nickName: ctx.request.body.nickName,
      token,
    }
  }
)

export { loginRouter }
