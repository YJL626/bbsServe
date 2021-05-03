import { verify } from '../middleware/verifyMiddleware'
import Router from 'koa-router'
import {
  queryDateCopyToRequestBody,
  tokenDateCopyToRequestBody,
} from '../middleware/middleware'
import { forgetController } from '../controller/forgetController'

const forgetPasswordRouter = new Router()

forgetPasswordRouter.get(
  '/forget/pwd',
  queryDateCopyToRequestBody,
  verify.reqBodyIntegrity(['email']),
  forgetController.checkEmailExist,
  forgetController.sendPwdMail
)
forgetPasswordRouter.patch(
  '/forget/pwd',
  verify.tokenIntegrity(['email', 'forgetPwd']),
  verify.reqBodyIntegrity(['pwd']),
  forgetController.changePwd
)
export { forgetPasswordRouter }
