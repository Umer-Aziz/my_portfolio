require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require("mongoose");


const path=require('path');
const hbs=require('hbs');

const User=require("./models/userMessage");
const port=process.env.PORT || 3000;

// seting the path 
const staticPath=path.join(__dirname,"./public");
const tempPath=path.join(__dirname,"./templates/views");
const partialsPath=path.join(__dirname,"./templates/partials");

//creating a database
mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true ,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
}).then(()=>{
    console.log("connection Successful")
}).catch(err =>{
    console.log(err);
})

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',tempPath);
hbs.registerPartials(partialsPath);
//routing
 


app.get("/",(req,res)=>{
    res.render('index');
})

app.post("/contact",async(req,res)=>{
    try {
        
        const UserData=new User(req.body);
        
        await UserData.save();
        res.status(201).render("index");
        

    } catch (error) {
        res.status(500).send(error.message);
    }
   })

   app.use((req,res)=>{
    res.status(404).send('<h1>404, page not Found</h1>')
})

app.listen(port,()=>{
    console.log(`server running on port :${port}`);
})
