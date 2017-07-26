const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate, arguments: findOneAndUpdate(filter, update, options, callback) {teruns a promise}
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("597213c27631ccf504f8b1cb")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});

