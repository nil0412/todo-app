const TodoList = require("../models/todo");

module.exports.action = function(req, res){
        //using monodb using mongoose
        TodoList.create({
            description: req.body.description,
            category: req.body.category,
            date: req.body.date
        }, function(err, newCTask){
            if(err){
                console.log("Error in creating Task");
                return res.redirect('back');
            }
            console.log('***********', Task);
            return res.redirect('back');
    });
}