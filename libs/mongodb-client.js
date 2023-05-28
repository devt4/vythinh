const {MongoClient} = require('mongodb');

const MONGODB_URI="mongodb://localhost:27018/lamapex"
const options = {};

let clientPromise;

client = new MongoClient(MONGODB_URI, options);
clientPromise = client.connect();

module.exports = clientPromise