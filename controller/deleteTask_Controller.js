const TodoList = require("../models/todo");


module.exports.delete = function(req, res){
        //using monodb using mongoose
        let id = req.query.id;
        //find the contact in the database using id and delete it
        TodoList.findByIdAndDelete(id, function(err, task){
            if(err){
                console.log("Error in deleting an object from database");
                return;
            }
            console.log(`******** Task deleted : (${task})`);
            return res.redirect('back');
        });
}
