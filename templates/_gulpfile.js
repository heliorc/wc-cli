const path = require('path');
const gulp = require('gulp');

const wcGulp = require('@helio/wc-tasks');
const wcTasks = Object.keys(wcGulp.tasks);

// this registers the wc gulpfile functions to the local gulp
wcTasks.forEach((key) => {
  const task = wcGulp.tasks[key];
  gulp.task(key, task.dep || task.fn, task.fn);
});

module.exports = gulp;
