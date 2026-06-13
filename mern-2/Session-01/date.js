const http=require("http")
const server=http.createServer(()=>{
    console.log(`Hello from the server ${port}`);
})
let dat=new Date();
const port=8089;
server.listen(port,()=>{
    console.log("listening..... babe  :) :) :)")
    console.log(dat.toLocaleDateString());
    console.log(dat.toLocaleTimeString())
    console.log("Saikumar");
})