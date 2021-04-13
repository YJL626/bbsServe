import Router from "koa-router";
import { captchaController } from "../controller/captchaController";
const captchaRouter = new Router();
captchaRouter.get("/captcha", (ctx, next) => {
  ctx.body = captchaController.get();
});

export { captchaRouter };
