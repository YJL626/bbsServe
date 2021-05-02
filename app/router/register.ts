import Router from 'koa-router'
import { registerController } from '../controller/registerController'
import {
  tokenDateCopyToRequestBody,
  queryDateCopyToRequestBody,
} from '../middleware/middleware'
import { verify } from '../middleware/verifyMiddleware'

const registerRouter = new Router()

//首次用户传过来数据验证通过后进行验证，然后给用户发送mail，然后用户点击mail创建user
registerRouter.post(
  '/register',
  verify.reqBodyIntegrity(['name', 'nickName', 'email', 'pwd']),
  registerController.verifyEmail,
  registerController.verifyName,
  registerController.sendRegisterEmail
)
registerRouter.post(
  '/register/create',
  verify.tokenIntegrity(['name', 'nickName', 'email', 'pwd']),
  tokenDateCopyToRequestBody,
  registerController.verifyEmail,
  registerController.verifyName,
  registerController.create
)
registerRouter.get(
  '/check/email',
  queryDateCopyToRequestBody,
  verify.reqBodyIntegrity(['email']),
  registerController.verifyEmail,
  registerController.backUnused
)
registerRouter.get(
  '/check/name',
  queryDateCopyToRequestBody,
  verify.reqBodyIntegrity(['name']),
  registerController.verifyName,
  registerController.backUnused
)
export { registerRouter }
