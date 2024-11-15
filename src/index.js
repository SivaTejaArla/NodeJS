const startServer = require('./../server')
const express = require('express');
const app  = express();

app.get('/',(req,res)=>{
    res.status(200).send('Express App ');
});
app.get('/about',(req,res)=>{
    res.status(200).send('Express About Page ');
});
app.post('/',(req,res)=>{
    res.status(200).send('Express Post App ');
});

app.listen(8500, ()=> {
    console.log(`Server started at 'http://localhost:8500`);
})