import fs from'fs';

const appendFileSync = (path,data)=>{
    fs.appendFileSync(path,data);
    console.log("data has been appended successully");
}
appendFileSync("./example.txt","this data has been appended through sync fun of fs ");
