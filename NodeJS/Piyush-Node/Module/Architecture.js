console.log("Saikumar");
const fs=require("fs");
 fs.readFile("./Contacts.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading file:",err);
    }else{
        console.log("Data from Contacts.txt file:",data);
    }
 })
 console.log("After readFile call");
 //Write the code in non-blocking/asynchronous way it  will process the event loop since it is asynchronous.
 //limited thread pool size in node js is 4 by default we can change it by setting environment variable UV_THREADPOOL_SIZE.
 const os=require("os");
 console.log("Number of CPU cores:",os.cpus().length);