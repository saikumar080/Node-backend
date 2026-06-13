const http=require('http')
let count=0;
const server=http.createServer((req,res)=>{
    count++;
    console.log(`#${count} -> Request received 🚀`)
    res.writeHead(200,{"content-type":"text/plain"});
    res.end(`Hello Client 🎉 - This  is request #${count}`)
})
const port=8081
server.listen(port,()=>{
    console.log(`✅ server runnig on ${port}`)
})