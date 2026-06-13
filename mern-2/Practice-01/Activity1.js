// import require from node
const http=require("http")
// create a server
const server=http.createServer((req, res)=>{
    const date=new Date()
    console.log(`Today the date is: `, date.toLocaleDateString())
    console.log(`time: `, date.toLocaleTimeString())
    res.writeHead(200,{"content-type":"text/plain"});
    res.end(`Time: ${date.toLocaleTimeString()} Date: ${date.toDateString()}`)
})

//listen to port:
let port=8080;
server.listen(port,()=>{
    console.log(`I am running on port ${port} 🎯🎯`)
})