const http=require("http");
const server=http.createServer((req,res)=>{
    // Get current date and time
    const now=new Date();
    const date=now.toDateString();
    const time=now.toTimeString();
    // Send response
    console.log("Hello from the  server")
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Welcome to the Date-Time Server!\n");
    res.write("hello from  the server\n");
    res.write(`Current Date: ${date}\nCurrent Time: ${time}`);
    res.end();
    
})
server.listen(8081,()=>{
    console.log("Date-Time Server is listening on port 8081");
    const now=new Date();
    const date=now.toDateString();
    const time=now.toTimeString();
    console.log(`Server started at ${date} ${time}`);


})