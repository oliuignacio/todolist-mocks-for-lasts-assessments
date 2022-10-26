'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require ('sequelize');

const config = {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false
};

const sequelize = new Sequelize('todolist', 'postgres', 'Codeworks2022', config);
const db = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
