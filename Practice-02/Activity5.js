const http=require("http");
//const currenciesJSON=require("./curriences.json")
const axios=require("axios");
const { error } = require("console");
const port=8085;
let count
const server=http.createServer(async(req,res)=>{
    
    switch(req.url){
        case "/":
            res.writeHead(200,{"content-type":"text/html"});
            res.write('<h1>Currency Database</h1>');
            res.end();
            break;
        case '/currencies':
            try{
                const response=await axios.get("https://api.coinbase.com/v2/currencies");
                res.writeHead(200,{"content-type":"application/json"});
                res.write(JSON.stringify(response.data))
                res.end();
            }catch(err){
                res.writeHead(500,{"content-type":"application/json"});
                res.end(JSON.stringify({
                    message:"Something went wrong",
                    error:err.message
                }));
            }
           
            break;
        default:
            res.writeHead(404,{"content-type":"text/plain"});
            res.end("404 - Page Not Found");
    }
})
server.listen(port,()=>{
    console.log(`Node server is running on ${port}`);
})