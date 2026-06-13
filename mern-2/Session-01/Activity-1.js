console.log("Activiyy -1 file ");
const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Doing activity for DATe-time");
    res.end("Response from the server");
})
let date=new Date();
const todayDate=date.toLocaleDateString();
const time=date.toLocaleTimeString();
server.listen(8088,()=>{
    console.log(`today's date is ${todayDate} and time is ${time}`);
})