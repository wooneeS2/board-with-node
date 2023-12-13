const { MongoClient } = require('mongodb');

const uri =
    'mongodb+srv://****:****cluster0.xuppdu5.mongodb.net/?retryWrites=true&w=majority';
module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
};
