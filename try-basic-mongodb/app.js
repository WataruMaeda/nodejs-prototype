const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// MARK: - Consts

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

// MARK: - Connect DB

const client = new MongoClient(url,{ useNewUrlParser: true });
client.connect((err) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  insertDocuments(db, () => {
    findDocuments(db, () => {
      client.close();
    });
  });
});

// MARK: - Insert

const insertDocuments = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], (err, result) => {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    console.log(result);
    callback(result);
  });
}

// MARK: - Find

const findDocuments = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

// *documentation
// http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/