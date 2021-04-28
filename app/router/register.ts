import Router from 'koa-router'
import { registerController } from '../controller/registerController'
import { tokenDateCopyToRequestBody } from '../middleware/middleware'
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
export { registerRouter }
