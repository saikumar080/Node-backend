const http=require('http');
const port=8080;
http.createServer((req,res)=>{
    const method=req.method;
    const url=req.url;
    if(url==='/todos'){
        if(method==='GET'){
            res.writeHead(200,{'content-type':'text/html'});
            res.write('<h1>TODO LIST </h1>')
            res.end();
        }else{
            res.writeHead(501,{'content-type':'text/html'});
            res.write('<h1> Not Implemented </h1>')
            res.end();
        }
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('404 Not Found');
        res.end();

    }
    
    
}).listen(port,()=>{
    console.log(` Nodejs Server is running on port ${port}`);
})