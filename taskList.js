const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function addTask() {
  return new Promise((resolve) => {
  rl.question('Enter task description: ', (description) => {
    const task = {
      id: '',
      description: description,
      status: 'Not Completed'
    };
    tasks.push(task);
    console.log('Task added successfully!');
    resolve();
  });
});
}

function deleteTask() {
  return new Promise((resolve) => {
  rl.question('Enter index of the task to delete: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Task deleted successfully!');
    } else {
      console.log('Invalid index. Please try again.');
    }
    resolve();
  });
});
}

function completeTask() {
  return new Promise((resolve) => {
  rl.question('Enter index of the task to mark as completed: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].status = 'Completed';
      console.log('Task marked as completed!');
    } else {
      console.log('Invalid index. Please try again.');
    }
    resolve();
  });
})

function showTasks() {
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('Tasks:');
    tasks.forEach((task, index) => {
      console.log(`[${index}] id: ${task.id}, Description: ${task.description}, Status: ${task.status}`);
    });
  }
  showMenu();
}

async function showMenu() {
  console.log('Menu:');
  console.log('1. Add Task');
  console.log('2. Delete Task');
  console.log('3. Complete Task');
  console.log('4. Show Tasks');
  console.log('5. Exit');
  console.log();
  
  const option = await askQuestion('Choose an option: ');
  
    switch (option) {
      case '1':
        await addTask();
        break;
      case '2':
        await deleteTask();
        break;
      case '3':
        await completeTask();
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
  };
};

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

console.log('Welcome to the To-Do App!');

showMenu();
