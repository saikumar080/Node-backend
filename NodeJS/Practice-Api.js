const http=require("http");
const fs=require("fs");
const data=JSON.parse(fs.readFileSync("./Albums.json","utf-8"));

const server=http.createServer((req,res)=>{
    console.log("URL called:",req.url);
    switch(true){
        case req.url==="/":
            res.writeHead(200,{"content-type":"application/json"});
            res.write("<h1>Album Database</h1>");
            res.end();
            break;
        case req.url==="/albums":
            res.writeHead(200,{"content-type":"application/json"});
            res.write(JSON.stringify(data));
            res.end();
            break;
        case req.url.startsWith("/albums/"):
            const albumId=req.url.split("/")[2];
            const result=data.find(item=> item.id==albumId);
            if(result){
                res.writeHead(200,{"content-type":"application/json"});
                res.write(JSON.stringify(result));
                res.end();
            }else{
                res.writeHead(400,{"content-type":"application/json"});
                res.write(JSON.stringify({message:"Album Not Found"}));
                res.end();
            }
            break;
        default:
            res.writeHead(404,{"content-type":"text/plain"});
            res.write("404 Route Not Found");
            res.end();
    }
})
server.listen(8085,()=>{
    console.log("Server is running on port 8085");
})
