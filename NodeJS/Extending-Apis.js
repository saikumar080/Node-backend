console.log("Extending APIs in NodeJS");
const http=require('http');
const fs=require('fs');
const raw=JSON.parse(fs.readFileSync("./currencies.json","utf-8"));
const data=raw.data;
const server=http.createServer((req,res)=>{
  console.log("URL called:",req.url);
  switch(true){
    case req.url==="/":
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write("<h1>Currency Database<h1>");
      res.end();
      break;
    case req.url==="/currencies":
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(data));
        res.end();
        break;
    case req.url.startsWith("/currencies/"):
        const currency=req.url.split("/")[2].toUpperCase();
        const result=data.find(item=> item.id===currency);
        if(result){
          res.writeHead(200,{'Content-Type':'application/json'});
          res.write(JSON.stringify(result));
          res.end();
        }else{
          res.writeHead(400,{'Content-Type':'application/json'});
          res.write(JSON.stringify({message:"Currency Not Found"}));
          res.end();
        }
        break;
    default:
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write("404  Route Not Found");
        res.end();
  }
})
server.listen(8084,()=>{
  console.log("Server is running on port 8084");
})