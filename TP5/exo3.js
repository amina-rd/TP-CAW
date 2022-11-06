
const fs = require('fs');
const path = require('path');
function nodeGrep(regEx,...Files){
   
    const regex = new RegExp(regEx);
    const fd= []
    for(f in Files){

        const isDir = fs.statSync(`./${Files[f]}`).isDirectory();
        
        if(!isDir){
            const dt = fs.readFileSync(`${Files[f]}`, 'utf8');
            if(regex.test(dt)){
                
                fd.push(Files[f])
            }
        }else{
            let recFiles = fs.readdirSync(Files[f]);
            for(file in recFiles){
                recFiles[file] = `./${Files[f]}/${recFiles[file]}`;
            }
            
               let res = nodeGrep(regEx,...recFiles);
               res.forEach((e)=>{
                fd.push(path.basename(e))
               })
        }
        

    }
    
    return fd? fd :"NONE";
}
console.log(nodeGrep("stic",'txt1.txt','txt2.txt'))