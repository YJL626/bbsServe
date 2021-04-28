import Router from 'koa-router'
import { registerController } from '../controller/registerController'

const registerRouter = new Router()
registerRouter.post(
  '/register',
  registerController.verifyDataIntegrity
)
export { registerRouter }
