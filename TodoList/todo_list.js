//Defining variable 
const elements = {}; 
let tasks = [];

//Functions 
const domManipulation = () => {
    elements.taskInput = document.querySelector('#taskInput');
    elements.addTaskBtn = document.querySelector('#addTaskBtn');
    elements.taskList = document.querySelector('#taskList');
    elements.clearCompletedBtn = document.querySelector('#clearCompletedBtn');
}

// create the addTask function 

const addTask = () => {
    //this retrieve the value entered into the taskInput HTML element by the user, 
    // trimming any trailing whitespace  
    const taskText = elements.taskInput.value.trim();
    if(taskText !== ""){
        tasks.push({text: taskText});
        //resetting the value of the taskInput(clearing the input for the next task entry)
        elements.taskInput.value = '';
        displayTasks();
    }
}

const displayTasks = () => {
    elements.taskList.innerHTML = '';
    tasks.forEach((task, index) =>{
        elements.li = document.createElement('li');
        elements.li.innerHTML = `
             <input type="check" id="task-${index}" ${task.completed ? "checked" : ""}>
             <label for="task-${index}">${task.text}</label>`;
             elements.li.querySelector("input").addEventListener("change", () => toggleTask(index));
             elements.taskList.append(elements.li);

    });
}

const toggleTask = (index) =>{
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

const clearCompletedTasks = () => {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

const appendEventListener = () => {
    elements.addTaskBtn.addEventListener("click", addTask);
    elements.clearCompletedBtn.addEventListener("click", clearCompletedTasks);

}

const init = () => {
    domManipulation();
    appendEventListener();
    displayTasks();
}

init();