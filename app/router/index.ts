import combineRouters from "koa-combine-routers";
import { captchaRouter } from "./captcha";
const routers = combineRouters(captchaRouter);
export { routers };
