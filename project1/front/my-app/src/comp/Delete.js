import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Delete(){
    const [data,setData]=useState([]);
  const[Das_Id,setDas_Id]=useState("");
    function deletedata(){
         fetch(`http://localhost:3001/users/${Das_Id}`, {
            method: 'DELETE',
          })
            .then((response) => {
                console.log("deleted")
            })
           
    }

 

    useEffect(()=>{
        axios.get('http://localhost:3001').then((Response)=>{
          console.log(Response.data)
          setData(Response.data)
        });
        },[])

    return(<>
     <div className='app'>
    <h2 align="center"> Deletion Table</h2>
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
   <div>
      <label>
        DAS ID:
        <input type="text" value={Das_Id} onChange={(e) => setDas_Id(e.target.value)} />
      </label>
      <button onClick={deletedata}>Delete User</button>
    </div>

    </>)
}
export default Delete;