// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

//----- 1.  INTRODUCE TASK OBJECT & MODIFY NEWTASK FUNCTION -----//
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskComplete.push(false);
//   taskDescription.push(description);
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

//----- 2. GET RID OF ALL ARRAYS & REPLACE WITH OBJECT -----//
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

function completeTask(task) {
  task.complete = true;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean cat litter", "Take all the :shit: out of the litter box");
const task2 = newTask("Do laundry", ":sad:");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);