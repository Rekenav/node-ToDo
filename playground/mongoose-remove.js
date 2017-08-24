const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/DB/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()

//  Todo.finByIdAndRemove

Todo.findOneAndeRemove({_id: "599ea00e70ec7ad7adb0150b"}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove("599ea00e70ec7ad7adb0150b").then((todo) => {
    console.log(todo);
});