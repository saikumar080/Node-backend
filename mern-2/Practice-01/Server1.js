// 1. Import server from require like{http, express}
const http=require('http');
/*
2. create a server: which  is CB function contain 2 parameters.
    1. request(req) -> contains info about client request
    2. response(res) ->  used to send back data to client.
    => Use the createServer method on the http module to create a server
    => The createServer() method takes in a callback which is executed once the server receives a request from the client.

*/
const server=http.createServer((req, res)=>{
console.log("Hello Server.!!!      🔥🔥🚀🚀")
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("Welcome to my Node.js server 🎉")
})
/*
3. Server listen:  we make a server to listen for any requests. It is also CB function which container 2 parameters
    1. Port
    2. success/ reject CB function
    
*/
const port=8082;
server.listen(port, ()=>{
    console.log(` Iam runnig on port ${port} 🎯🎯`)
})
