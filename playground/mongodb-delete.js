const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  db.collection('Users').deleteMany({name: 'susheel'}).then((result) => {
    console.log(result);
  });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("584df97a8c0f802d2265e379")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });
  //db.close();
});
