const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Hello  from  the  server")
})
server.listen(8082,()=>{
    console.log("Listening....");
})