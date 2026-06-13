console.log("Activity-02");
const http=require("http");
let date=new Date();

const server=http.createServer((req, res)=>{
    console.log("Doing activity for Date-time");
    console.log(`today's date is ${date.toLocaleDateString()}`);
    console.log(`current time is ${date.toLocaleTimeString()}`);
    res.write("Hello Node.js");
    res.end();
})
server.listen(8090,()=>{
    console.log("server is running on port 8090");
})