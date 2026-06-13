const http=require('http');
const { version } = require('os');
const server=http.createServer((req,res)=>{
    console.log("Server is running  and  sending  status");
    const serverInfo={
            serverName:'Crio.do',
            version:'1.0.0',
            currentTime:new Date().toDateString(),
            currentDate:new Date().toTimeString(),

        }
        if(req.url==='/status'){
                res.writeHead(200,{'content-type':'application/json'})
                res.write(
                    `${JSON.stringify(serverInfo)}`
                );
                res.end();
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(`<h1>Hello from  the  server</h1>`);
            res.end();
        }

});
server.listen(8083,()=>{
    console.log("Server status is being sent on port 8083");
})