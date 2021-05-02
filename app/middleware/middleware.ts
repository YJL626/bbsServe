import { Next, ParameterizedContext } from 'koa'

const tokenDateCopyToRequestBody = async (
  ctx: ParameterizedContext,
  next: Next
) => {
  ctx.request.body = ctx.state.user
  await next()
}
const queryDateCopyToRequestBody = async (
  ctx: ParameterizedContext,
  next: Next
) => {
  ctx.request.body = Object.assign({}, ctx.request.query)
  await next()
}

export { tokenDateCopyToRequestBody, queryDateCopyToRequestBody }
