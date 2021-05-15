import { ParameterizedContext, Next } from 'koa'
import { DATA_FORM_ERROR } from '../constants/errorType'
import { myObject } from '../type'
import { checkObjectForm } from '../utils/utils'
class Verify {
  reqBodyIntegrity(model: myObject | []) {
    return async function properExist(ctx: ParameterizedContext, next: Next) {
      try {
        const reqBody = ctx.request.body as myObject

        //检测reqBody的结构和model是否一致
        const isIntegrity = Array.isArray(model)
          ? model.every((property) =>
              Object.prototype.hasOwnProperty.call(reqBody, property)
            )
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

  tokenIntegrity(model: myObject | []) {
    return async function properExist(ctx: ParameterizedContext, next: Next) {
      try {
        const token = ctx.state.user as myObject
        //检测token的结构和model是否一致

        const isIntegrity = Array.isArray(model)
          ? model.every((property) => {
              return Object.prototype.hasOwnProperty.call(token, property)
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
