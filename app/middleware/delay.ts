import { ParameterizedContext, Next } from 'koa'

const delay = async (ctx: ParameterizedContext, next: Next) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(0)
    }, 200)
  })
  await next()
}
export { delay }
