// TASK MANAGER
// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER;

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
    `Charge MacBook `,
    `Master JavaScript`
]

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu)

// Loops and continues to display the menu until the user ends/closes the Task Manager (Until the user enters CLOSE)
let running = true

while(userInput !== "CLOSE"){
    
    if (userInput === "TASKS") {
        for(let i = 0; i<tasks.length;i++) {
            showTasks+=(tasks[i]+"\n")
        }
        alert(showTasks);
        showTasks = '';
        userInput = prompt(menu)
    }
    

    

    if(userInput === "NEW"){
        newTask = prompt("Enter the new task:");
        tasks.push(newTask);
        alert("Task added successfully!");
        userInput = prompt(menu)
    } 

    if(userInput === "REMOVE") {
        for(let i = 0; i<tasks.length;i++) {
            showTasks+=(tasks[i]+"\n")
        }
        num = prompt("Please type the number of the task you want to be removed:");
        showTasks = '';
        parseInt(num)
        num += 1
        removed = tasks.indexOf(num)
        tasks = tasks.splice(num, 1)
        alert("Task successfully removed!")
        userInput = prompt(menu)
    }
    // Displays the menu again
    userInput = prompt(menu)
    // This break can be commented out after the close feature is complete
    // break;
}

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`)