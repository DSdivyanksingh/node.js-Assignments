const fs = require('fs');
const http = require('http');

fs.writeFileSync("index.html", `<h1>Hello World</h1>`, (err) =>{
    console.log(err);
})

const server=http.createServer((req,res)=>{
    var data=fs.readFileSync("index.html",`utf-8`);
    console.log(data)
    res.writeHead(200,{'content-type' : 'text/html'});
    res.end(data);
})
server.listen(3000, ()=>console.log("This server is listening on port 3000"));