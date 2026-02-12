import fs, { readFileSync } from'fs';
const writeFileSync = (path) => {
    try{
        const data = fs.readFileSync(onratechange,)

        fs.readFileSync(path,data);
        console.log("Data has been successfully readed...");
    }
    catch(error){
        console,log("unable to write data...");
    }
}
readFileSync("./example.txt")
