import Koa from "koa";
import bodyparser from "koa-bodyparser";
import { routers } from "./app/router/index";
import cors from "@koa/cors";
const app = new Koa();

app.use(bodyparser()).use(cors()).use(routers());
app.listen(8000, () => console.log("success"));
