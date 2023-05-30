const {MongoClient} = require('mongodb');

const MONGODB_URI="mongodb+srv://truongta:27022001a@cluster0.nrcqngy.mongodb.net/?retryWrites=true&w=majority"
const options = {};

let clientPromise;

client = new MongoClient(MONGODB_URI, options);
clientPromise = client.connect();

module.exports = clientPromise