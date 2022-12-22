const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');

const TodoList = require('./models/todo')

const app = express();

app.use('/', require('./routes/index'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));



app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is runnig on port : ${port}`);
    return;
});