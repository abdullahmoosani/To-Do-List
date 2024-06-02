import inquirer from "inquirer";

let todos = [];

let condition = true;
 
while (condition) {
    let addTasks = await inquirer.prompt(
        [
            {
                name : "todo",
                type : "input",
                message : "what do you want add in yours Todos?"
            },
            {
                name : "addMore",
                type : "confirm",
                message : "are you sure you want to add in your todos",
                default : "false"
            },
            {
                name : "removeAny",
                type : "input",
                message : "Please provide the index of item to remove",
                // default : "false"
            },

        ]
    );


todos.push(addTasks.todo);
todos.pop();
condition = addTasks.addMore;
console.log(todos);


// if(todos == true){
// todos.splice(todos, 1)
// }

};


