//file handling in node js:
//fs stands for file system:
const { time } = require('console');
const fs = require('fs');
/*    ===== How to write a file in node js =====       */
    //sync means synchronous call:
    //fs.writeFileSync('./test.txt',"Hey World...!!!");
    //Asynchronous call:
    //fs.writeFile('./test.txt',"Hello world from async call....!!!!",(err)=>{})
    
/*======== how to  read a file in node js of internal module fs: ==========*/
    //sync way to read a file: where  you can return  the  result directly.
    const result=fs.readFileSync("./Contacts.txt","utf-8");
    console.log(result);
    //async way to read a file: where you have to use callback function to return the result along with error handling.
    fs.readFile('./Contacts.txt','utf-8',(err,data)=>{
        if(err){
            console.log("Error",err);
        }else{
            console.log("Data from async call:",data);
        }
    })
/*======== how to  append a file in node js of internal module fs: ==========*/
    //sync way to  appen a file:
    fs.appendFileSync("./test.txt", `${Date.now()} Hey there \n`);//appending current date to the file.
    //async way to append a file: *** here  it  will  throw  Error in async append the  reason is  async not work here sync file opens the file and lock the file finishes the changes where added to the file at the same time async pending the request windows sees the file is busy so it throws EBUSY resource busy or locked.
    //to avoid this error we can use setTimeout function to delay the async call.
    setTimeout(()=>{
         fs.appendFile("./test.txt",`\n This is async append file \n`,(err)=>{
        if(err){
            console.log("Error in async append:",err);
        }else{
            console.log("Async append successful");
        }
        })
    },1000);
   
/*======== how to copy a file in node js of internal module fs: ==========*/
    //sync way to copy a file:
    fs.copyFileSync('./test.txt','./test2.txt');
    //async way to copy a file:
    setTimeout(()=>{
        fs.copyFile('./test.txt','./test3.txt',(err)=>{
            if(err){
                console.log("Error",err)
            }else{
                console.log("Async file copy successful");
            }
        })
    },2000)

// /*======== how to rename a file in node js of internal module fs: ==========*/
    //sync way to rename a file:
        fs.renameSync('./test2.txt','./renamedTest.txt');
    //async way to rename a file:
    setTimeout(()=>{
        fs.rename("./test3.txt","./renamedTest2.txt",(err)=>{
            if(err){
                console.log("Error",err)
            }else{
                console.log("Async file rename successful");
            }
        })
    })
/*======== how to delete a file in node js of internal module fs: ==========*/
    //sync way to delete a file:
    fs.unlinkSync('./renamedTest.txt');
    //async way to delete a file:
    setTimeout(()=>{
        fs.unlink("./renamedTest2.txt",(err)=>{
            if(err){
                console.log("Error",err)
            }else{
                console.log("Async file delete successful");
            }
        })
    },3000)
/* ===== How to  check the status of the  file ======= */
    //sync way to check the status of the file:
    const stats=fs.statSync('./test.txt');
    console.log("File Stats:",stats);