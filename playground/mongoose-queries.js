const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/DB/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

var id = '5978c248958e77ab63611313';

Users.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});

// var id = "5979cd50b0386fbac5e7f51811";

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// }); 

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id nog found');
//     }
//     console.log('todo by id', todo);
// }).catch((e) => console.log(e));