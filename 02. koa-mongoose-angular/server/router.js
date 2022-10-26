'use strict';

const Router = require('koa-router');
const router = new Router;
const todolist = require('./controllers/task');

router.get('/todolists', todolist.getTodolist);
router.post('/todolists', todolist.postTodolist);














module.exports = router;