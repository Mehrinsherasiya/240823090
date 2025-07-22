// import add from "./add.js";
// const add=require("./add.js")
// console.log(add(11,22));


//PARH
// const path=require("path")
// console.log(path.basename("myfile.txt"))
// console.log("Directory Name:",__dirname)
// console.log(path.basename(__dirname+ "/myfile.txt"))
// console.log("full path:",path.resolve(__dirname),"myfile.txt")

// MOMENT
// const moment=require("moment")
// console.log("current data and time:",moment().format("DD-MM-YYY HH:mm:ss"))

//lodash
// const ls=require("lodash")
// console.log("capitalize:",ls.capitalize("mehrin"))

//FS
//npm install fs
const fs=require("fs")
fs.writeFile("myfile.txt","hello gusy!",(err)=>{
    if(err)throw err;
    console.log("file has been saved!")
});
fs.readFile("myfile.txt","utf8",(err,data)=>{
    if(err)throw err;
    console.log("file content:",data)
});