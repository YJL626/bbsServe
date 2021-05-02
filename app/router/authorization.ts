import { verify } from '../middleware/verifyMiddleware'
import Router from 'koa-router'

import { authController } from '../controller/authController'
const loginRouter = new Router()

loginRouter.post(
  '/login/email',
  verify.reqBodyIntegrity(['email', 'pwd']),
  authController.login
)
export { loginRouter }
