import Router from 'koa-router'
import { MailCtl } from '../controller/mailController'
const mailRouter = new Router()
mailRouter.get('/mail', async (ctx, next) => {
  ctx.body = [10]
  const a = new MailCtl().send({
    to: '909861220@qq.com',
    html: '<button>haha</button>',
    subject: 'hello',
  })

  await next()
})

export { mailRouter }
