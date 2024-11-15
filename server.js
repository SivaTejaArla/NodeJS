const http = require ('http');
const fs = require('fs')
const url = require('url');


// Read the file
const da = fs.readFileSync('./src/sample.json', 'utf-8' , (err,data)=>{});
const dao = JSON.parse(da);
const server  =  http.createServer( ( req,res ) => {

 const path = req.url;
 if ( path == '/overview')
    res.end("OverView");
    else if ( path == '/about' )
    res.end("About");
    else if ( path == '/contact' )
    res.end("Contact");
    else if (path == '/api'){
       res.end(dao);
       
    }
    else  {
    res.writeHead(404);    // go to ‘network’ in inspect to see this.
    res.end("404 ERROr")  }          
    


});

server .listen(7000,()=> {
    console.log("Server started at port : 7000  ")
});
