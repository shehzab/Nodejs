// OS module  -- the os module in Node.js provides a way to interact with the operating system

const os = require('os')

// info about current user 

const user = os.userInfo()

console.log(user)

// method returns the system suptime in seconds
console.log(`the System uptime is ${os.uptime()} seconds`)

// info about cpu 

// const cpu = os.cpus();
// console.log(cpu);


const currentOS ={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
   freeMem:os.freemem(),
}

console.log(currentOS)
