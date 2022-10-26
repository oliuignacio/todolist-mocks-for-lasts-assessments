'use strict';
const { showList } = require('./view');
const { db } = require('./models/');

const getToDoList = async ctx => {
  try {
    const toDoList = await db.tasks.findAll();
    console.log(toDoList);
    //ctx.body = [JSON.stringify(toDoList)];
    //showList(toDoList);
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
}

const postToDoList = async ctx => {
  try {
    await db.tasks.create({
      task: ctx.request.body.task, 
      responsable:ctx.request.body.responsable, 
      priority:ctx.request.body.priority, 
      duedate: ctx.request.body.duedate 
    });
    ctx.status = 201;
  } catch (error) {
    ctx.body = 'error';
    ctx.status = 501;
  }
}

module.exports = { getToDoList, postToDoList};