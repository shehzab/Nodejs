// HTTP - hyper text transfer protocol
/* 
    -- http is a built-in module in Node.js.
    -- http modules enables the creation and management of HTTP servers 
       and clients.
    -- allows to handle HTTP requests and responses.
 */
   


const http = require('http')
const port = 5000
const server = http.createServer((req,res)=>{
    res.write('welcome to home page')
    res.end()
})

server.listen(port)

console.log(`server is running at http://localhost:${port}/`)
