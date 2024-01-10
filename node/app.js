//  Modules can be loaded into program by using the required function
const names = require('./4-names.js')

console.log(names)

const sayHi = require('./5-utils.js')

console.log(sayHi)

sayHi('susan')

sayHi(names.john)

sayHi(names.peter)
