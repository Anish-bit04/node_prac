// Child Process

// let cp=require("child_process");
// cp.execSync("calc")
// cp.execSync("start chrome https:\\www.youtube.com")

//OS Features

// let os = require("os")
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.networkInterfaces());
//  console.log(os.cpus());

// FileSystem

// files =>create, read ,update , delete 
// let fs = require("fs")

// read
 // let buffer = fs.readFileSync("abc.js")
// console.log("bin data"  + buffer)

//create
// fs.openSync("abc.txt", "w");
// no file ->create and if  file exist -> content replace
// fs.writeFileSync("abc.txt", "backend sikh raha hu")

//update
// fs.appendFileSync("abc.txt", " sikh leya")


//Folder
// create
// fs.mkdirSync("folder")  create folder 
// fs.writeFileSync("folder/text.txt","heeee")

//delete file
// let content = fs.readdirSync("folder");
// console.log(content);
// for (let i = 0;i<content.length; i++){
//     fs.unlinkSync("folder/"+content[i])  (delete file)
// }

//delete folder
// fs.rmdirSync("folder") 
//fs.existSync() -> reurn true if file exist otherwise false 
//fs.lstateSync()-> tell is it is a file or directory (folder)

