import compose from 'koa-compose'
import Router from 'koa-router'
import { readDirModules, isRouter } from '../utils/utils'

//读取当前目录全部的router；
const routerArr = readDirModules(__dirname, [
  /^index/,
  /.map/,
]).filter((router: any) => isRouter(router)) as Array<Router>
//对routers进行compose
const routers = compose(routerArr.map((item) => item.routes()))
//对AllowedMethods进行compose
const routesAllowedMethods = compose(
  routerArr.map((item) => item.allowedMethods())
)

export { routers, routesAllowedMethods }
