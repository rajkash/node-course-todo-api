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

  db.collection('Todos').find().count().then((count) => {
    console.log('All Todos count', count);
  }, (error) => {
    console.log('Unable to find documents', error);
  });

  db.collection('Users').find({name: 'Avira Kashid'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to find documents', error);
  });

  client.close();
});
