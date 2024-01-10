//  Modules can be loaded into program by using the required function
const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-syntax.js')

console.log(data)

console.log(names)

console.log(sayHi)

sayHi('susan')

sayHi(names.john)

sayHi(names.peter)
