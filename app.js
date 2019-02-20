var express = require('express'),
    app = express(),
    db = require('./db'),
    TodoController = require('./todos/TodoController');

app.use('/api', TodoController);

module.exports = app;
