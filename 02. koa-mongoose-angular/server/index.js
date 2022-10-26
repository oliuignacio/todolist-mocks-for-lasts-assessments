'use strict';

const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
//const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const db = require('./models/index');
//const conf = require('./config');
const router = require('./router');

const PORT = 3000;

app.use(cors());

//app.use(serve(conf.clientPath));
app.use(bodyParser());
app.use(router.routes());

db();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); 
});