import { Next, ParameterizedContext } from 'koa'

const tokenDateCopyToRequestBody = async (
  ctx: ParameterizedContext,
  next: Next
) => {
  ctx.request.body = ctx.state.user
  await next()
}
export { tokenDateCopyToRequestBody }
