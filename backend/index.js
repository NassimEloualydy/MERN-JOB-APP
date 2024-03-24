const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors");
require("dotenv").config();
const app=express();
const PORT=process.env.PORT || 500

const userRoutes=require("./routes/userRoutes");

app.use(cors())
app.use(express.json());

app.use("/API/user",userRoutes);

const DATABASE=process.env.DATABASE
mongoose.connect(DATABASE).then(()=>{
    console.log("DATABASE CONNECTED")
}).catch((err)=>{
    console.log(err)
    
});
app.listen(PORT,()=>{
    console.log(`app running on a port ${PORT}`)
})