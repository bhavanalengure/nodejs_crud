import React  from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import Home from './home';
import Add from './Add';
import Update from './Update';
import Delete from './Delete';
import "./Navbar.css"

function Navig(){
    return(
    <>
    <BrowserRouter>
        <div>
         <h1><u><center>USER MANAGEMENT</center></u></h1> <br/>
        </div>
  <Navbar className='ab' variant='dark'>
    <Container>
    <Nav className="me-auto">
      <Nav.Link className='nav' as={Link} to ={"/"}>Home</Nav.Link>
      <Nav.Link className='nav' as={Link} to ={"/Add"}>Add</Nav.Link>
      <Nav.Link className='nav' as={Link} to ={"/Delete"}>Delete</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>  
  <div>
  <Routes>
        <Route path ='/'
        element ={<Home/>}/> 
        <Route path = '/Add'
        element = { < Add /> }/>  
        <Route path = '/update/:Das_Id'
        element = { < Update /> } /> 
            <Route path = '/Delete'
        element = { < Delete /> } /> 
        </Routes>
        </div>
        </BrowserRouter>
        </>
 ) 
}
export default Navig;