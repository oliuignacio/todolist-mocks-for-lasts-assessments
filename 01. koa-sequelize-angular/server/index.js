'use strict';

const Koa = require('koa');
const app = new Koa();
//const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const db = require('./models/index');
// const conf = require('./config');
const router = require('./router');

const PORT = 3000;

//app.use(serve(conf.clientPath));
app.use(bodyParser());

app.use(router.routes());

app.use(async ctx => {
  ctx.body=`<h1>This URL does not exist</h1>`;
  ctx.status=404;
});

(async function () {
  await db.sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})();



