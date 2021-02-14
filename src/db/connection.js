const mongoose=require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/umeraziz",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection Successful")
}).catch(err =>{
    console.log(err);
})