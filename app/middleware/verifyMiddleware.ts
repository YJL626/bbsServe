import { ParameterizedContext, Next } from 'koa'
import {
  DATA_FORM_ERROR,
  INCORRECT_USERNAME_OR_PASSWORD,
} from '../constants/errorType'
import { userModel } from '../service/database'
import { userServices } from '../service/userServices'
import { checkObjectForm } from '../utils/utils'
class Verify {
  reqBodyIntegrity(model: object | []) {
    return async function properExist(ctx: ParameterizedContext, next: Next) {
      try {
        const reqBody = ctx.request.body as object

        //检测reqBody的结构和model是否一致
        let isIntegrity = Array.isArray(model)
          ? model.every((property) => {
              return (reqBody as any).hasOwnProperty([property])
            })
          : checkObjectForm(model, reqBody)
        if (isIntegrity) {
          //结构符合预期则next
          await next()
        } else {
          ctx.app.emit('error', DATA_FORM_ERROR, ctx)
          ctx.app.emit('error', DATA_FORM_ERROR, ctx)
        }
      } catch (err) {
        console.log('internalErr reqBodyIntegrity ', err)
      }
    }
  }

  tokenIntegrity(model: object | []) {
    return async function properExist(ctx: ParameterizedContext, next: Next) {
      try {
        const token = ctx.state.user as object
        //检测token的结构和model是否一致

        let isIntegrity = Array.isArray(model)
          ? model.every((property) => {
              return (token as any).hasOwnProperty([property])
            })
          : checkObjectForm(model, token)
        if (isIntegrity) {
          //结构符合预期则next
          await next()
        } else {
          ctx.app.emit('error', DATA_FORM_ERROR, ctx)
        }
      } catch (err) {
        console.log('internalErr tokenIntegrity ', err)
      }
    }
  }
}
const verify = new Verify()
export { verify }
