const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const {selectmessage,addmessage}= require("./user");

app.get("/users",async (req,res)=>{
    const list = await selectmessage();
    res.json(list);
});
app.post("/addmessage",async(req,res)=>{
    const user= req.body;
    await addmessage(user);
    res.json({message:"message record succesfully"});
});

app.listen(4000,()=>console.log("server started"));
