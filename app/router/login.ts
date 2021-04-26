import Router from 'koa-router'
import { myJwt } from '../utils/jsonwebtoken'
const loginRouter = new Router()
loginRouter.post('/login', async (ctx, next) => {
  const data = await myJwt.sign({ 10: 10 }, 1 * 60)
  console.log(ctx.state.user)
  ctx.body = data
})

export { loginRouter }
