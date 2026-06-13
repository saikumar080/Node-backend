console.log(" I am server file")
const http=require("http");
const port=3009;
const server=http.createServer((req, res)=>{
    console.log("I am server created");
    res.end("Response from the server")
})

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})