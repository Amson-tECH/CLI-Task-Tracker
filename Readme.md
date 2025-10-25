## A CLI Task Tracker
A simple command-line task tracker built with Node.js. Manage your tasks directly from the terminal with an intuitive interface.

## Features

- ✅ Add new tasks
- 📝 List all tasks
- 🎯 Mark tasks as complete
- 🗑️ Delete tasks
- 💾 Persistent storage using JSON

## Installation

1. Clone or download this project
2. Use :
   ```bash
   node index.js
   ```
3. or (Optional) Create a symlink to use it globally:
   ```bash
   npm link
   ```

## Usage

### Add a new task
```bash
index.js add "Buy groceries"
```

### List all tasks
```bash
index.js list
```

### Mark a task as done
```bash
index.js done 1
```

### Delete a task
```bash
index.js delete 1
```

### Show help
```bash
index.js
```

## How it works

Tasks are stored in a `task.json` file in the same directory as the script. Each task has:
- **id**: Unique identifier
- **name**: Task description
- **done**: Completion status (true/false)

## Requirements

- Node.js (v14 or higher recommended)

## Example

```bash
$ index.js add "Write documentation"
✅ Added task: "Write documentation"

$ index.js add "Fix bug in login"
✅ Added task: "Fix bug in login"

$ index.js list

📝 Your Tasks:
1. ❌ Write documentation
2. ❌ Fix bug in login

$ index.js done 1
🎯 Marked task 1 as done.

$ index.js list

📝 Your Tasks:
1. ✅ Write documentation
2. ❌ Fix bug in login
```


## Author

Name: Reuben | reubenamuzu23@gmail.com