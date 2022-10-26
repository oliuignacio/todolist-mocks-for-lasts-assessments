'use strict';

const showList = function (task) {
  return `<h1>This task needs attention ${task}!</h1>`;
};

module.exports = { showList };