const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
require("./db/connection")
const port=process.env.PORT || 3000;

// seting the path 
const staticPath=path.join(__dirname,"../public");
const tempPath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");
//middleware

app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',tempPath);
hbs.registerPartials(partialsPath);
//routing

app.get("/",(req,res)=>{
    res.render('index');
})

app.listen(port,()=>{
    console.log(`server running on port :${port}`);
})