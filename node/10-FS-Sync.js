const {readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf-8')
const second = readFileSync('./content/subfolder/scnd.txt','utf-8')

writeFileSync('./content/result-sync.txt',
    `here is the result :${first } ,${second}`,
    {flag:'a'}
)
