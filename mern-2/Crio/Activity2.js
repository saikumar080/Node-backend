const http=require('http');
const port=8082;
const todoList=[
    {id:1,task:"Learn Nodejs"},
    {id:2,task:"Learn Expressjs"},
    {id:3,task:"Learn MongoDB"},
    {id:4,task:"Learn Reactjs"},
    {id:5,task:"Playing Cricket"}
];
http.createServer((req,res)=>{
    const{method,url}=req;
    if(url==="/todos"){
        if(method==="GET"){
            res.writeHead(200,{'Content-Type':'application/json'});
            res.write(JSON.stringify(todoList));
            res.end();
        }else if(method==="POST"){
            let body="";
            req.on("error",(err)=>{
                console.error(err);               
                res.writeHead(400,{'Content-Type':'application/json'});
                res.write(JSON.stringify({message:"Invalid request body"}));
                res.end();
            })

            req.on("data",(chunk)=>{
                body+=chunk;

            });
            req.on("end",()=>{
                try{
                    const data=JSON.parse(body);
                    todoList.push(data);
                    res.writeHead(201,{'Content-Type':'application/json'});
                    res.write(JSON.stringify({message:"Todo added successfully"}));
                    res.end();

                }catch(err){
                    res.writeHead(400,{'Content-Type':'application/json'});
                    res.write(JSON.stringify({message:"Invalid JSON format"}));
                    res.end();
                }
                

            })
        }else if(method ==="DELETE"){
            let body="";
            req.on("error",err=>{
                console.error(err)
                res.writeHead(400,{'Content-Type':'application/json'});
                res.write(JSON.stringify({message:"Invalid request body"}));
                res.end();
            })
            req.on("data",chunk=>body+=chunk);

            req.on("end",()=>{
                try{
                    const data=JSON.parse(body);
                    const index=todoList.findIndex(todo=>todo.id===data.id);
                    if(index !== -1){
                       const deleteTodo= todoList.splice(index,1);
                        res.writeHead(204,{'Content-Type':'application/json'});
                        res.write(JSON.stringify({message:"Todo deleted successfully"}));
                    }else{
                        res.writeHead(404,{'Content-Type':'application/json'});
                        res.write(JSON.stringify({message:"Todo not found"}));
                    }
                    res.end();
                }catch(err){
                    res.writeHead(400,{'Content-Type':'application/json'});
                    res.write(JSON.stringify({message:"Invalid JSON format"}));
                    res.end();
                }
                
            })
        }else{
            res.writeHead(501,{'Content-Type':'text/plain'});
            res.write("Not Implemented");
            res.end();
        }
    }else{
        res.writeHead(404,{'Content-Type':'texxt/palin'});
        res.write("404 Not Found");
        res.end();
    }
}).listen(port,()=>{
    console.log(`Nodejs server is running on port ${port}`);
})