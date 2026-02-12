import{appendFileSync,readFileSync,writeFileSync}
from "./readAndWriteFile.js"
console.log("before read ");

readFileSync("./exaple.txt");

console.log("after read");

console.log("before write");
writeFileSync("./exaple.txt","added data");

console.log()




appendFileSync("./exaple.txt");
