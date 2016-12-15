const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove().then((todo) => {
//   
// });

Todo.findByIdAndRemove('5852f4e20b68d41e1438a8fe').then((todo) => {
  console.log(todo);
});
