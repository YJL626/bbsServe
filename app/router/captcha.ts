import Router from 'koa-router'
import { captchaController } from '../controller/captchaController'
const captchaRouter = new Router()
captchaRouter.get('/captcha', async (ctx, next) => {
  ctx.body = captchaController.get()
  await next()
})

export { captchaRouter }
