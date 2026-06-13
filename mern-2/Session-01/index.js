const http=require("http");
const server=http.createServer(()=>{
    console.log("Hello from server");
})
let date=new Date();
server.listen(8081,()=>{
    console.log("listening..... babe 🥰🥰🥰")
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleTimeString())
})