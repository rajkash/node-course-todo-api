// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017/TodoApp';

// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
  if(err) {
    console.log('Error connecting to mongodb', err);
    return;
  }
  console.log('Connected to MongoDb');

  const db = client.db('TodoApp');

  db.collection('Users').insertOne({
    name: 'Rajesh Kashid',
    age: 34,
    location: 'Bristol'
  }, (err, result) => {
    if(err) {
      console.log('Insert failed', err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  })

  client.close();
});
