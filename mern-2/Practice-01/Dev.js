// console.log("From the nodemon 🚀🚀🚀🚀🔥🔥🔥🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🎯🎯🎯🎯🎯")
// // Dynamica update after saving we can see in the terminal....

import http from "http";
 const server =http.createServer((req, res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    // res.write("Hello from Dev.js file.!!!      🔥🔥🚀🚀");
    res.end("Welcome to Dev.js file 🎉🎉🎉🎉");

 })
 const port =8086;
 server.listen(port),()=>{
    console.log(` what's up bro ${port} 🎯🎯`)
 }