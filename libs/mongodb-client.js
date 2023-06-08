const {MongoClient} = require('mongodb');

const MONGODB_URI="mongodb+srv://thangvythinh:truongta11@cluster0.ig14omr.mongodb.net/?retryWrites=true&w=majority"
const options = {};

let clientPromise;

client = new MongoClient(MONGODB_URI, options);
clientPromise = client.connect();

module.exports = clientPromise