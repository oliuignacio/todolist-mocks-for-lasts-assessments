'use strict';

const models = require('../models/task');

exports.getTodolist = async ctx => {
  try {
    ctx.body = JSON.stringify(await models.getAll());
    ctx.status = 200;
  } catch (error) {
    console.log('error', error);
    ctx.body = error;
    ctx.status = 500;
  }
};

exports.postTodolist = async ctx => {
  try {
    console.log("this post", await ctx.request.body);
    models.postOne(await ctx.request.body);
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status;
  }


}










