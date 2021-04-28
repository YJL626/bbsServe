import { verify } from '../middleware/verifyMiddlewares'
import Router from 'koa-router'

import { authController } from '../controller/authController'
const loginRouter = new Router()

loginRouter.post(
  '/login/email',
  verify.reqBodyIntegrity(['email', 'password']),
  verify.emailLogin,
  authController.login
)
export { loginRouter }
