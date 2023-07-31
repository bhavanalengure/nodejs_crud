import {useEffect,useState}from "react";
import axios from 'axios';
import "./Addcs.css"
function Add() {
  const [data,setData]=useState([]);
  const[Das_Id,setDas_Id]=useState("");
  const[LastName,setLastName]=useState("");
  const[FirstName,setFirstName]=useState("");
  const[Age,setAge]=useState("");
  const[email,setemail]=useState("");
  function insertRecord(){
    let rec={Das_Id,LastName,FirstName,Age,email};
    axios.post("http://localhost:3001/user",rec)
    .then((Response)=>{
      console.log(Response.data);
    })
  }
  
   useEffect(()=>{
       axios.get('http://localhost:3001').then((Response)=>{
         console.log(Response.data)
         setData(Response.data)
       });
       },[])

  return (<>
   <div className='app'>
    <h2 align="center"> Insertion Table</h2>
   <table border='1' align='center'>
     <tr>
       <th>Das Id </th>
       <th>Last Name</th>
       <th>First Name</th>
       <th>Age</th>
       <th> Email Id</th>
     </tr>{
       data.map((d)=>
       <tr>
         <td>{d.Das_Id}</td>
         <td>{d.LastName}</td>
         <td>{d.FirstName}</td>
         <td>{d.Age}</td>
         <td>{d.email}</td>
       </tr>)
     }
   </table>
   </div>
   <div className='App'>
     <h3> Insertion </h3>
   <table border='1' align='center'>
     <tr>
       <td> DAS ID</td><input type="text" onChange={(e)=>{setDas_Id(e.target.value)}} />
     </tr>
     <tr>
       <td> LAST NAME</td><input type="text" onChange={(e)=>{setLastName(e.target.value)}} />
     </tr>
     <tr>
       <td> FIRST NAME</td><input type="text" onChange={(e)=>{setFirstName(e.target.value)}} />
     </tr>
     <tr>
       <td> AGE </td><input type="text" onChange={(e)=>{setAge(e.target.value)}}/>
     </tr>
     <tr>
       <td> EMAIL ID</td><input type="text" onChange={(e)=>{setemail(e.target.value)}}/>
     </tr>
     <tr>
     <td colSpan="2"><button onClick={insertRecord}>Add</button></td></tr>
   </table>
   </div>
   </>
  );
}

export default Add;