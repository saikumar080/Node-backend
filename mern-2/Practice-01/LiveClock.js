const http=require("http")
const server=http.createServer((req,res)=>{
  if(req.url ==="/LiveClock"){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Live Clock</title>
            </head>
              <style>
                body{
                    font-family:Arial, ubuntu;
                    text-align: center;
                    margin-top: 20%;
                    font-size:2rem;
                    background: #f4f4f4;
                }
              </style>
            <body>
              <h1>⏰ Live Digital Clock</h1>
              <p id="clock"></p>
              <script>
                function updateClock() {
                  const now = new Date();
                  document.getElementById("clock").innerText =
                  "Date: " + now.toLocaleDateString() + " | Time: " + now.toLocaleTimeString();
                }
                setInterval(updateClock, 1000); // update every second
                updateClock(); // initial call
              </script>
          </body>
        </html>
        `)
  }else{
    res.writeHead(404,{"Content-Type":"text/plain"})
    res.end("404 Not Found")
    }
})
const port=8083;
server.listen(8083,()=>{
    console.log(`I am running on port ${port}`)
    console.log("Live cloc is  running on")
})