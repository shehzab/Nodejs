// Globals - No window!!!
/* Global Objects are built-in objects that are part of the 
   JavaScript and can be used directly in the application without
   importing any particular module. 
*/


// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules(CommonJS)
// module      - info about current module(file)  
// process     - info about env where the program is being executed
// buffer      - provides a way to work with binary data directly 
// require     - A function used to import modules in Node js

console.log(__dirname)
console.log(__filename)

const buffer = Buffer.alloc(5,"abcde");
console.log(buffer)

setInterval(()=>{
    console.log("hello world")
},1000)
