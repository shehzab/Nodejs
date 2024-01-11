const { readFile, writeFile, write} = require('fs')

readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/subfolder/scnd.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/subfolder/result-sync.txt',
        `Here's the result : ${first},${second}`,
        (err,result)=>{
            if(err){
                return;
            }
            console.log(result)
        }
        )
    })
})
