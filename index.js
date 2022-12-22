const express = require('express');
const path = require('path');
const port = 8000;

//it is important to write this line to configure with db
const db = require('./config/mongoose');

const app = express();

app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static('assets'));

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is runnig on port : ${port}`);
    return;
});