import Router from 'koa-router'

import { authController } from '../controller/authController'
const loginRouter = new Router()
loginRouter.post(
  '/login/email',
  authController.verifyEmailLogin,
  authController.login
)

export { loginRouter }
