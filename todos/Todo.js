var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
});
var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo
