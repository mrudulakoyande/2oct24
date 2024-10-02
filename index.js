const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

app=express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
    // const url="mongodb://0.0.0.0:27017"; check locally 
    const url="mongodb+srv://mrudulakoyande24:GfDWiLC8WTW6WAxA@cluster0.c13uh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client=new MongoClient(url);
    const db=client.db("wn2oct24");
    const coll=db.collection("student");
    const doc={"name":req.body.name,"choice":req.body.choice};
    coll.insertOne(doc)
    .then(result=>res.send(result))
    .catch(error=>res.send(error));
});
app.listen(9000,()=>{console.log("ready@9000");});