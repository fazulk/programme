import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";

const app = new Koa();
const router = new Router();

router.get(`/1`, (ctx, next) => {
  ctx.body = `first`;

  // ctx.router available
});

router.get(`/2`, (ctx, next) => {
  ctx.body = `second`;
  // ctx.router available
});

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000`)
);
