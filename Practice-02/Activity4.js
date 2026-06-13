const http=require("http");

const port=8084;
const serverInfo={
    serverName:"Crio Server",
    version:"1.0.0",
    currentDate:new Date().toDateString(),
    currentTime: new Date().toTimeString()
};
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json","region":"Ind"});
    res.write(JSON.stringify(serverInfo));
    res.end();
}).listen(port,()=>{
    console.log(`Node server is running on port ${port}`);
})