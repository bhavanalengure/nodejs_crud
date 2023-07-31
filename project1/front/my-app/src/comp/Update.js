import "./updatecs.css"
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update(){

    const {Das_Id}= useParams();
  const[LastName,setLastName]=useState("");
  const[FirstName,setFirstName]=useState("");
  const[Age,setAge]=useState("");
  const[email,setemail]=useState("");
    useEffect(()=>{
        axios.get('http://localhost:3001/edit/'+Das_Id)
        .then(res=>{
            setLastName(res.data[0].LastName);
            setFirstName(res.data[0].FirstName);
            setAge(res.data[0].Age);
            setemail(res.data[0].email);
            
        })
        .catch(err=>console.log(err))

    },[])
    const navigate=useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/user/'+Das_Id, {Das_Id,LastName,FirstName,Age,email})
        .then(res=>{
            if(res.data.Updated){
                navigate('/')

            }
        })
    }

    return(<><div class="form-container">
   <form onSubmit={handleSubmit}>
        <h2>Updation</h2>
        <div className="mb2">
            <label htmlFor="" class="label">Das Id</label>
            <input type="text" class="input" value={Das_Id}/>
        </div>
        <div className="mb2">
            <label htmlFor="" class="label">Last Name</label>
            <input type="text" class="input" value={LastName} onChange={e=>setLastName(e.target.value)}/>
        </div>
        <div className="mb2">
            <label htmlFor="" class="label">First Name</label>
            <input type="text" class="input" value={FirstName} onChange={e=>setFirstName(e.target.value)}/>
        </div>
        <div className="mb2">
            <label htmlFor="" class="label"> Age</label>
            <input type="number" class="input" value={Age} onChange={e=>setAge(e.target.value)}/>
        </div>
        <div className="mb2">
            <label htmlFor="" class="label">Email Id</label>
            <input type="text" class="input" value={email} onChange={e=>setemail(e.target.value)}/>
        </div>
        <button class="button">Update</button>
   </form></div>
    </>)
}

export default Update;