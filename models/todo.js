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
    },
    checked: {
        type: Boolean,
        required: true
    }
});

const TodoList = mongoose.model('todo_list_db', todo_schema);

module.exports = TodoList;