import { verify } from '../middleware/verifyMiddleware'
import Router from 'koa-router'
import { queryDateCopyToRequestBody } from '../middleware/middleware'
import { forgetController } from '../controller/forgetController'

const forgetPasswordRouter = new Router()

forgetPasswordRouter.get(
  '/forgetPwd',
  queryDateCopyToRequestBody,
  verify.reqBodyIntegrity(['email']),
  forgetController.checkEmailExist,
  forgetController.sendPwdMail
)
forgetPasswordRouter.patch(
  '/forgetPwd',
  verify.tokenIntegrity(['email', 'forgetPwd']),
  verify.reqBodyIntegrity(['pwd']),
  forgetController.changePwd
)
export { forgetPasswordRouter }
