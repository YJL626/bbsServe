import { readFileSync } from 'fs'

import Koa, { Next, ParameterizedContext } from 'koa'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import koaJwt from 'koa-jwt'

import { errHandle } from './errHandle'
import { delay } from './middleware/delay'
import { routers, routesAllowedMethods } from './router/index'
const app = new Koa()
//parser和跨域设置
const jwtMiddleWare = koaJwt({
  secret: readFileSync('./key/rsa_public.key'),
}).unless({ path: [/\*?/] })

app
  .use(koaBody())
  .use(cors())
  .use(jwtMiddleWare)
  .use(delay)
  .use(routers)
  .use(routesAllowedMethods)
  .on('error', errHandle)
//模拟网络请求给服务器设置延迟

app.listen(8000, () => console.log('success'))
