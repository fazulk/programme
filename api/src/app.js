import koaBody from "koa-bodyparser";
import { graphqlKoa } from "apollo-server-koa";

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

import schema from "./schema/index.js";
// koaBody is needed just for POST.
app.use(koaBody());

router.post("/graphql", graphqlKoa({ schema }));
router.get("/graphql", graphqlKoa({ schema }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
