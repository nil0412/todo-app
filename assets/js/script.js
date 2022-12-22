(function(){

    const TodoList = require("../../models/todo");
    console.log("********* Its in Script.js ********");

    function toggleTask (taskId) { 

        TodoList.findById(taskId, function(err, task){
            console.log("********* Its in toggle function ********");
            task.checked = ! task.checked;
        });
    }

    function handleClick(e){
        var target = e.target;
        if(target.className === "custom-checkbox"){         
            const taskId = target.id;         
            toggleTask(taskId);     
        }  
    }
    
    function initializeApplication(){  
        document.addEventListener("click", handleClick); 
    } 
    
    initializeApplication();
})();