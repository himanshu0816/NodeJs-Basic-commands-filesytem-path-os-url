// FILE SYSTEM
const fs= require('fs')
const path =require('path')

//create folder
// fs.mkdir(path.join(__dirname,'/test1'),function(error){
//     if(error) throw error
    // console.log("folder created!!")
// })

//crete and write to file
// fs.writeFile(path.join(__dirname,'test1','Hello.text'),"Hello world!!",function(error){
//     if(error) throw error
//     console.log("file Created ")
    
// })

//Read The File
// fs.readFile(path.join(__dirname,'/test1','Hello.txt'),'utf8',function(error,data){
//     if(error) throw error
//     console.log(data)
// })

//Rename the file

fs.rename(path.join(__dirname,'/test1','Hello.txt'),path.join(__dirname,'/test1','Nodejs.txt'),function(error){
    if(error) throw error
    console.log("File Rename")
})

//File
fs.writeFile(path.join(__dirname,'/test1','Hello.txt'),'Nodejs is Awsome',function(error){
    if(error) throw error
    console.log("File Append")
})
