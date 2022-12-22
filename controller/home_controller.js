const TodoList = require("../models/todo");

module.exports.home = function(req, res){

    //fetching data from database
    TodoList.find({}, function(err, tasks){
        if(err){
            console.log(`Error : ${err}`);
            return res.redirect('back');
        }

        return res.render('../views/home', {
            title : "Todo App",
            task_list : tasks
        });

    });
}
