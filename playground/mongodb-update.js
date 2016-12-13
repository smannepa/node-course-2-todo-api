const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  db.collection('Todos').findOneAndUpdate(
    {text: 'take a walk'},
    {$set: {completed: true}},
    {returnOriginal: false})
    .then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });
  //db.close();
});
