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


const os = require('os');

console.log('Architecture:', os.arch());
console.log('Platform:', os.platform());
console.log('CPUs:', os.cpus());
console.log('Total Memory:', os.totalmem() / (1024 * 1024) + ' MB');
console.log('Free Memory:', os.freemem() / (1024 * 1024) + ' MB');
console.log('Load Average:', os.loadavg());
console.log('User Info:', os.userInfo());
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
console.log('Hostname:', os.hostname());


