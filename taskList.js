const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function addTask() {
  rl.question('Enter task description: ', (description) => {
    const task = {
      id: '',
      description: description,
      status: 'Not Completed'
    };
    tasks.push(task);
    console.log('Task added successfully!');
    showMenu();
  });
}

function deleteTask() {
  rl.question('Enter index of the task to delete: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Task deleted successfully!');
    } else {
      console.log('Invalid index. Please try again.');
    }
    showMenu();
  });
}

function completeTask() {
  rl.question('Enter index of the task to mark as completed: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].status = 'Completed';
      console.log('Task marked as completed!');
    } else {
      console.log('Invalid index. Please try again.');
    }
    showMenu();
  });
}

function showTasks() {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    console.log(`[${index}] id: ${task.id}, Description: ${task.description}, Status: ${task.status}`);
  });
  showMenu();
}

function showMenu() {
  console.log('Menu:');
  console.log('1. Add Task');
  console.log('2. Delete Task');
  console.log('3. Complete Task');
  console.log('4. Show Tasks');
  console.log('5. Exit');
  console.log('\n');
  
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        showTasks();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid option. Please try again.');
        showMenu();
        break;
    }
  });
}

console.log('Welcome to the To-Do App!');

showMenu();
