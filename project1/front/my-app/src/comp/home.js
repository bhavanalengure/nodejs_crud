import React from "react";
import './home.css';
import { useEffect } from "react";
import { useState } from "react";
import {  Link } from 'react-router-dom'


function Userdata(){
    const [users,setUsers]=useState([]);
   

    useEffect(()=>{
        fetch('http://localhost:3001')
        .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
    })

  return (
        <table>
          <thead>
            <tr>
              <th>Das Id</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Age</th>
              <th>Email Id</th>
              <th>Update Data</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.Das_Id}>
                <td>{user.Das_Id}</td>
                <td>{user.LastName}</td>
                <td>{user.FirstName}</td>
                <td>{user.Age}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/update/${user.Das_Id}`} className="btn btn-success">Update</Link>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

function Home(){
  return(<>
  <Userdata/>
  </>)
}
export default Home;
