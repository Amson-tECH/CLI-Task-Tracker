#!/usr/bin/env node
import fs from "fs";

const FILE_PATH = "./task.json";

function loadTasks() {
  if (!fs.existsSync(FILE_PATH)) return [];
  const data = fs.readFileSync(FILE_PATH, "utf8");
  return JSON.parse(data || "[]");
}

function saveTasks(tasks) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

const [,, command, ...args] = process.argv;

switch (command) {
  case "add": {
    const taskName = args.join(" ");
    if (!taskName) console.log("❌ Please provide a task name.");
    const tasks = loadTasks();
    const newTask = { id: tasks.length + 1, name: taskName, done: false };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`✅ Added task: "${taskName}"`);
    break;
  }

  case "list": {
    const tasks = loadTasks();
    if (tasks.length === 0) console.log("📭 No tasks yet.");
    console.log("\n📝 Your Tasks:");
    tasks.forEach(t => {
      const status = t.done ? "✅" : "❌";
      console.log(`${t.id}. ${status} ${t.name}`);
    });
    break;
  }

  case "done": {
    const id = parseInt(args[0]);
    const tasks = loadTasks();
    const task = tasks.find(t => t.id === id);
    if (!task) console.log("⚠️ Task not found!");
    task.done = true;
    saveTasks(tasks);
    console.log(`🎯 Marked task ${id} as done.`);
    break;
  }

  case "delete": {
    const id = parseInt(args[0]);
    let tasks = loadTasks();
    const newTasks = tasks.filter(t => t.id !== id);
    if (newTasks.length === tasks.length)  console.log("⚠️ Task not found!");
    saveTasks(newTasks);
    console.log(`🗑️ Deleted task ${id}.`);
    break;
  }

  default:
    console.log(`
Usage:
  task add "Task name"   ➤ Add a new task
  task list               ➤ List all tasks
  task done <id>          ➤ Mark task as done
  task delete <id>        ➤ Delete a task
`);
}
