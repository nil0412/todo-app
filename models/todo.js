const mongoose = require('mongoose');

const todo_schema = mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

const TodoList = mongoose.model('TodoList', todo_schema);

module.exports = TodoList;