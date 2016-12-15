var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(process.env.MONGODB_URI || url);

module.exports = {mongoose};
