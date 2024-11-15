
const fs = require('fs')
const url = require('url');

// Read the file
function startServer(port) {
    const http = require ('http');
    const server  =  http.createServer( ( req,res ) =>{
        res.end("Server Started ");
    });
    
    server .listen(port,()=> {
        console.log(`Server started at 'http://localhost:${port}'`);
    });
    

}
module.exports = startServer;