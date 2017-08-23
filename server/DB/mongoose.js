var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    mlab : 'mongodb://Edd555:Welkom01@ds155473.mlab.com:55473/todo',
    localhost : 'mongodb://localhost:27017/TodoApp'
};

mongoose.connect(db.localhost || db.mlab);
// process.env.PORT ? 
module.exports = {mongoose};