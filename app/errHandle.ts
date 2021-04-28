import { ParameterizedContext } from 'koa'
import { errType } from './type'

const errHandle = async (err: errType, ctx: ParameterizedContext) => {
  console.log(1);
  
  if (err.msg && err.stateCode) {
    ctx.status = +err.stateCode
    ctx.body = err.msg
  } else {
    ctx.status = 404
    ctx.body = 'err not found'
  }
}

export { errHandle }
