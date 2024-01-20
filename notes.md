# What is Node js ?

 - Node js is an Open Source , Cross-Platform runtime environment for executing JS code.
 - Used extensively for Server-side Programming
- it's a single threaded , event-driven environment

# Pros & Cons

PROS :
- Speed
- Productivity -- node js is a highly productive platform for developing web apps
- Error Handling -- BUilt in error handling mechanism that allows you to catch eroors at runtime and do something with them
- Faster development
- Highly scalable
- Flexible in Developing Dynamic Web Apps

CONS:

- Asynchronous Programming Model
- Unstable Api
- Memory Leaks

https://www.geeksforgeeks.org/the-pros-and-cons-of-node-js-in-web-development/       

# REPL - (Read-Eval-Print-Loop)

- It is an Interactive Shell that allows to run Js code directly in Node js environment
- This Powerful tool is invaluable for debugging, prototyping, and learning js



# CLI - Command-line-API





# npm - node package manager
- npm manages dependencies in Node.js projects,simplifying the process of adding, updating and sharing packages
- Use  npm install package-name to fetch and install project-specific dependencies locally in the node_modules directory

# npx - package runner
- Node package execute , executes node js packages , streamlining the running of buinaries or cammands without global installations 
- run tool without global instalation, ensuring a clean developmnet environment

# npm vs npx
 - npm is a package manager used to install,delete and update JS packages on your machine
 - npx is a package executer, and it is used to execute JS packages direclty withopur Installing them


# Package.json

the package.json file tracks project metadata and dependencies , ensuring version consistency




# Modules in Node js

- Module is a reusable piece of code that can be used in multiple javascript files
- Modules are same as JS libraries 
- Modules can be organized in a single file or a collection of multiple files/folders
- similiar to functions, but they can contain more functionality and can be used more than once in a program
- 3 types of modules are there :

        - Core module
        - Local module
        - Third-party module


-  # Core modules
  
  * modules that are built in to  Node js and are available to all Node js apps
  * eg : HTTP module, FS module, OS module

        const http =  require ('http')

- # Local modules

 * modules created by the developer and are specific to the application
 * Local modles can be stored in any  directory within the application 

        <!-- js File -->

        function add(a,b){
            return a+b
        } 
        module.exports= add


        <!-- node file -->
        

            const add = require('./module.js')
            const result = add(2,3)

            console.log(result)
    
- # Third-Party Modules

 * modules  created by other developers and available for download from Node Package manager 
 * eg: Nodemon , Lodash 

         npm i lodash

        const lodash = require('lodash')
