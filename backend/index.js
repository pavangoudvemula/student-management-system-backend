const express=require("express");
const app=express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

function checkuser(req,res,next){
    let val=req.headers["x-user"];
    if(val!="pavan"){
        res.status(401).send("Acess denied");
    }
    else{
        next();
    }
}
const students = require("./data/studentStore");





const studentRoutes = require("./routes/studentsRoutes");

app.use("/students", studentRoutes);

app.use((err,req,res,next)=>{
    res.status(500).json({
        success:false,
        message:err.message

    })
})





app.listen(3000,()=>{
    console.log("runnig on 3000port");
})