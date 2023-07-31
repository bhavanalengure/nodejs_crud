var http = require('http');
const con=require("./dbconnect");
const express=require("express");
const app=express()
app.use(express.json());
const cors=require('cors');
app.use(cors())


 



app.listen(3001,()=>{
    console.log("Server Started.....")                                          //Created server at port 3000
})

app.get("/",function(err,res){
    con.query("select * from user_details",function(error,result){              //API to get all details
        if(error)
        res.send(error)
        else
        res.send(result)
    })
})

app.get("/edit/:Das_Id",(req,res)=>{    
    const Das_Id=req.params.Das_Id                                             //API for getting data by id
    con.query("SELECT * FROM user_details WHERE Das_Id=?",[Das_Id],(err,result)=>{
        if(err) return res.json({Error:err})
        return res.json(result);
    })
})


app.put("/user/:Das_Id",(req,res)=>{                                      //API to update the data in database
    const id=req.params.Das_Id;
    const data=req.body;
    con.query("UPDATE user_details SET ? WHERE Das_Id = ?",[data,id],(err,result)=>{
        if(err)
            res.send(err)
        else
            return res.json({updated:true})
    })
})

app.post("/user",(req,res)=>{                                             //API for new entries in database
    const data=req.body
    con.query("INSERT INTO user_details SET ?",data,(err,result)=>{
        if(err)
            res.send(err)
        else
            res.send(result)
    })
})

app.delete("/users/:Das_Id",(req,res)=>{                                  //API to delete by id
    id=req.params.Das_Id
    con.query("DELETE FROM user_details WHERE Das_Id = ?",id,(err,result)=>{
        if(err)
            res.send(err)
        else
            res.send(result)
    })
})







