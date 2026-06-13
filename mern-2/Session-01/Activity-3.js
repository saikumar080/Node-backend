console.log("Doing Activity-03");
const http=require("http");
const serverInfo={
    sername: "Crio Server",
    version:"1.0.0",
    currentDate: new Date().toLocaleDateString(),
    currentTime: new Date().toLocaleTimeString()
}
const server=http.createServer((req, res)=>{
    // res.writeHead(200, {"content-type":"application/json"});
    // res.write(JSON.stringify(serverInfo));
    // res.end("Bye!!!");
    res.writeHead(200, {"content-type":"text/plain"});
    res.write("Hello ");
    res.write("World")
    res.end("Bye!!!");

})
server.listen((8083),()=>{
    console.log("Server is running on port 6008");
})