
# Node.js Notes

## Table of Contents
- [Introduction](#introduction)
- [Features of Node.js](#features-of-nodejs)
- [Pros and Cons](#pros-and-cons)
- [REPL](#repl)
- [CLI (Command-Line Interface)](#cli-command-line-interface)
- [npm vs npx](#npm-vs-npx)
- [package.json](#packagejson)
- [Modules](#modules)
  - [Core Modules](#core-modules)
  - [Local Modules](#local-modules)
  - [Third-Party Modules](#third-party-modules)
- [HTTP Module](#http-module)
- [File System (FS) Module](#file-system-fs-module)
- [Event Loop in Node.js](#event-loop-in-nodejs)
- [Buffer in Node.js](#buffer-in-nodejs)
- [Streams in Node.js](#streams-in-nodejs)
- [Error Handling in Node.js](#error-handling-in-nodejs)
- [Child Process Module](#child-process-module)
- [Process Object](#process-object)
- [EventEmitter in Node.js](#eventemitter-in-nodejs)

## Introduction

- **Node.js** is an open-source, cross-platform runtime environment for executing JavaScript code server-side.
- Built on **Google Chrome's V8 JavaScript engine**, Node.js allows you to run JavaScript outside the browser.
- It is primarily used for building scalable network applications, particularly for I/O-heavy tasks, such as building web servers and APIs.
- Node.js operates in an **asynchronous, event-driven** manner and follows a **single-threaded** architecture, making it highly efficient and suitable for building high-performance applications.

## Features of Node.js

- **Single-threaded and Event-driven**: Handles concurrent requests with a single thread using events and callbacks.
- **Non-blocking I/O**: Node.js processes requests asynchronously without waiting for one task to complete before starting the next.
- **Cross-platform**: Works across different operating systems (Windows, macOS, Linux).
- **Fast execution**: Built on the V8 engine, it compiles JavaScript into native machine code for faster performance.
- **Real-time applications**: Suitable for building real-time applications like chat apps, online games, etc.
- **Scalable**: Can handle many connections simultaneously using a small amount of resources.

## Pros and Cons of Node.js

### **Pros**:
1. **Speed**: Node.js is built on Chrome's V8 engine, which makes it very fast and efficient.
2. **Non-blocking I/O**: Node.js is ideal for I/O-heavy applications, allowing it to handle many concurrent requests.
3. **Single-threaded model**: This model reduces the overhead associated with multi-threading.
4. **NPM (Node Package Manager)**: A huge collection of open-source libraries to speed up development.
5. **Real-time applications**: Great for building real-time applications like online chat or games.
6. **Full-stack JavaScript**: Developers can use JavaScript on both the client-side and server-side.

### **Cons**:
1. **Callback Hell**: Handling complex asynchronous code with many nested callbacks can be difficult and lead to messy code.
2. **Not suitable for CPU-heavy operations**: Node.js is designed for I/O-heavy applications, not for CPU-intensive tasks like image processing.
3. **Asynchronous nature**: Asynchronous programming can be challenging for developers new to Node.js.
4. **Unstable API**: The Node.js API can change between versions, which can make upgrading difficult.

---

## REPL (Read-Eval-Print-Loop)

- **REPL** is an interactive shell that allows you to execute JavaScript code directly in Node.js.
- Useful for testing snippets of code, debugging, or experimenting.

### Example:
```bash
$ node
> console.log("Hello, Node.js!");
Hello, Node.js!
```

---

## CLI (Command-Line Interface)

- The **Command-Line Interface (CLI)** in Node.js allows you to execute JavaScript files and interact with Node.js through commands.
- Node.js CLI is used for running scripts, installing packages, and managing projects.
  
### Example:
```bash
$ node app.js
```

---

## npm vs npx

- **npm** is the Node Package Manager used to install and manage dependencies.
- **npx** is used to execute Node.js packages without installing them globally.

---

## package.json

- The `package.json` file is essential for managing project dependencies, scripts, and metadata.
- It contains details about the project, such as its name, version, and the dependencies it uses.
  
### Example of package.json:
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^4.17.1"
  },
  "scripts": {
    "start": "node app.js"
  }
}
```

---

## Modules in Node.js

Modules are reusable blocks of code that can be included and used in other parts of the application. Node.js has three types of modules:

### **Core Modules**:
- These are built-in modules provided by Node.js.
- Example: `http`, `fs`, `os`, `url`, etc.

  ```javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.write("Hello World");
    res.end();
  });
  server.listen(3000);
  ```

### **Local Modules**:
- These are custom modules created by the developer for specific application use.
  
  Example:
  ```javascript
  // math.js
  function add(a, b) {
    return a + b;
  }
  module.exports = add;
  ```

  ```javascript
  // app.js
  const add = require('./math');
  console.log(add(2, 3)); // 5
  ```

### **Third-party Modules**:
- These are modules developed by others and can be installed from **npm**.
  
  Example:
  ```bash
  npm install express
  ```

---

## HTTP Module

- The **HTTP module** is used to create HTTP servers and make HTTP requests.
- This module is essential for building web applications and APIs.

Example:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, HTTP');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

---

## File System (FS) Module

- The **FS module** is used to interact with the file system (read, write, update, delete files).
  
Example:
```javascript
const fs = require('fs');

// Reading a file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Writing to a file
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written!');
});
```

---

## Event Loop in Node.js

- Node.js operates on a single thread, but it uses an **event loop** to handle multiple requests asynchronously.
- The event loop allows Node.js to perform non-blocking I/O operations despite being single-threaded.

---

## Buffer in Node.js

- **Buffer** is used to handle binary data in Node.js. It is particularly useful for dealing with I/O operations like reading files or network communication.

Example:
```javascript
const buffer = Buffer.from('Hello, Node.js!');
console.log(buffer.toString());
```

---

## Streams in Node.js

- **Streams** are used to handle reading/writing data in chunks rather than loading everything into memory at once. This is important for large datasets.

Types of streams:
1. **Readable streams**: Used for reading data.
2. **Writable streams**: Used for writing data.

Example:
```javascript
const fs = require('fs');
const readableStream = fs.createReadStream('file.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
```

---

## Error Handling in Node.js

- Error handling is done using **try/catch** blocks for synchronous code and **callback functions** for asynchronous code.

Example:
```javascript
try {
  let data = fs.readFileSync('file.txt');
} catch (err) {
  console.log('Error occurred:', err.message);
}
```

---

## Child Process Module

- The **child_process** module allows you to spawn new processes, execute commands, and interact with external programs.

Example:
```javascript
const { exec } = require('child_process');

exec('ls', (err, stdout, stderr) => {
  if (err) {
    console.log(`Error: ${stderr}`);
  } else {
    console.log(stdout);
  }
});
```

---

## Process Object

- The **process** object provides information about the current Node.js process.
  
Example:
```javascript
console.log(process.pid); // Process ID
console.log(process.argv); // Command line arguments
```

---

## EventEmitter in Node.js

- The **EventEmitter** class allows you to work with custom events and create event-driven architectures.

Example:
```javascript
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

myEmitter.emit('event');
```

---

This is a comprehensive overview of **Node.js** with detailed explanations of key concepts and modules.
