// todo.ts
import inquirer from 'inquirer';
import chalk from 'chalk';
import { User } from './auth.js';

// Define the Task interface
export interface Task {
  description: string;
  done: boolean;
}

// Function to manage the user's todo list
export async function manageTodoList(user: User) {
  const taskMenuChoices = [
    'View Tasks',
    'Add Task',
    'Mark Task as Done',
    'Exit',
  ];

  const handleTaskChoice = async () => {
    const { choice } = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: `Todo List Menu of ${user.fullName}:`,
        choices: taskMenuChoices,
      },
    ]);

    switch (choice) {
      case 'View Tasks':
        viewTasks(user);
        break;
      case 'Add Task':
        await addTask(user);
        break;
      case 'Mark Task as Done':
        await markTaskAsDone(user);
        break;
      case 'Exit':
        console.log(chalk.bold.yellow('\nReturning to Main Menu.\n'));
        return;
    }

    await handleTaskChoice();
  };

  await handleTaskChoice();
}

// Function to view tasks for a specific user
function viewTasks(user: User): void {
  console.log(chalk.bold.cyan(`\nTodo List for ${user.username}:`));
  const tasks = user.tasks;

  if (tasks.length === 0) {
    console.log(chalk.yellow('\nNo tasks found.\n'));
  } else {
    tasks.forEach((task, index) => {
      const status = task.done ? chalk.green('Done') : chalk.red('Not Done');
      console.log(`${index + 1}. ${task.description} - ${status}`);
    });
  }
}

// Function to add a task for a specific user
async function addTask(user: User)  {
  const { description } = await inquirer.prompt({
    type: 'input',
    name: 'description',
    message: 'Enter task description:',
  });

  const newTask: Task = {
    description,
    done: false,
  };

  user.tasks.push(newTask);
  console.log(chalk.green('\nTask added successfully.\n'));
}

// Function to mark a task as done for a specific user
export async function markTaskAsDone(user: User) {
  if (user.tasks.length === 0) {
    console.log(chalk.yellow('\nNo tasks found.\n'));
    return;
  }

  const taskChoices = user.tasks.map((task, index) => ({
    name: `${index + 1}. ${task.description}`,
    value: index,
  }));

  const { taskIndex } = await inquirer.prompt([
    {
      type: 'list',
      name: 'taskIndex',
      message: 'Select a task to mark as done:',
      choices: taskChoices,
    },
  ]);

  user.tasks[taskIndex].done = true;
  console.log(chalk.green('\nTask marked as done.\n'));
}
