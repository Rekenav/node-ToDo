var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
//     mlab : 'mongodb://Edd555:Welkom01@ds155473.mlab.com:55473/todo',
//     localhost : 'mongodb://localhost:27017/TodoApp'
// };

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp');
// process.env.PORT ? 
module.exports = {mongoose};