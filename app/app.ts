import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import { routers, routesAllowedMethods } from './router/index'
import cors from '@koa/cors'
import koaJwt from 'koa-jwt'
import { readFile, readFileSync } from 'fs'
const app = new Koa()
//parser和跨域设置
const jwtMiddleWare = koaJwt({
  secret: readFileSync('./key/rsa_public.key'),
}).unless({ path: [/^\/mail/] })
app
  .use(bodyparser())
  .use(cors())
  .use(jwtMiddleWare)
  .use(routers)
  .use(routesAllowedMethods)

//模拟网络请求给服务器设置延迟
app.use(async (ctx, next) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(0)
    }, 200)
  })
  await next()
})

app.listen(8000, () => console.log('success'))
