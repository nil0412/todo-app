const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');

const TodoList = require('./models/todo');

const app = express();

app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static('assets'));
app.use(express.urlencoded());

// app.get('/', function(req, res){
//     return res.render('../views/home', {
//         title : "Todo App"
//     });
// });

// app.post('/action-page', function(req, res){
//     //using monodb using mongoose
//     TodoList.create({
//         description: req.body.description,
//         category: req.body.category,
//         date: req.body.date
//     }, function(err, newTask){
//         if(err){
//             console.log("Error in creating Task");
//             return res.redirect('back');
//         }
//         console.log('***********', newTask);
//         return res.redirect('back');
// });
// });


app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is runnig on port : ${port}`);
    return;
});