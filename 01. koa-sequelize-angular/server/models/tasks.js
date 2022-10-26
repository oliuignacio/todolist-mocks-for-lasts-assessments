'use strict';


module.exports = (sequelize, DataTypes) => {
  const ToDoList = sequelize.define('tasks', {
    task: DataTypes.STRING,
    responsable: DataTypes.STRING,
    priority: DataTypes.SMALLINT,
    duedate: DataTypes.STRING,
  });
  return ToDoList;
};

//module.exports = { retrieveList, addToDoList, seque };