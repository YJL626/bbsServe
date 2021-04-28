import { ParameterizedContext, Next } from 'koa'
import {
  DATA_FORM_ERROR,
  INCORRECT_USERNAME_OR_PASSWORD,
} from '../constants/errorType'
import { userModel } from '../service/database'
import { checkObjectForm } from '../utils/utils'
class Verify {
  reqBodyIntegrity(model: object | []) {
    return async function properExist(
      ctx: ParameterizedContext,
      next: Next
    ) {
      try {
        const reqBody = ctx.request.body as object
        //检测reqBody的结构和model是否一致
        let isIntegrity = Array.isArray(model)
          ? model.every((property) =>
              (reqBody as any).hasOwnProperty([property])
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
  async emailLogin(ctx: ParameterizedContext, next: Next) {
    //查询数据库
    const result = await userModel.findOne(ctx.request.body)
    if (result) {
      //认证通过将uid传递下去
      ctx.request.body = {
        uid: result._id,
        nickName: (result as any).nickName,
      }
      await next()
    } else {
      return ctx.app.emit(
        'error',
        INCORRECT_USERNAME_OR_PASSWORD,
        ctx
      )
    }
  }
}
const verify = new Verify()
export { verify }
