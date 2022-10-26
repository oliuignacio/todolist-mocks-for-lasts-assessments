'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  task: String,
  priority: Number,
  duedate: String
})
const Task = mongoose.model('Task', TaskSchema);
exports.Task = Task;

exports.getAll = async () => {
  try {
    let res = await Task.find();
    return res;
  } catch (error) {
    console.log('error', error);
  }
}

exports.postOne = async function (tsk) {
  const newTsk = new Task(
    { 
    task: tsk.task,
    priority: tsk.priority,
    duedate: tsk.duedate
  });
  console.log('model', tsk);
  newTsk.save(function (err, res) {
    if (err) return console.error(err);
  })
}


