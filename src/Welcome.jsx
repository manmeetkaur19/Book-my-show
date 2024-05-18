import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from'./CSS Module/Movie.module.css';
import { Button } from 'react-bootstrap';



export default function Welcome() {
  return (
    <>
     
    <div style={{height:'100vh',boxShadow:'1000px',backgroundSize: 'cover', backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(background.png.jpg)"}}>
    
 <Navbar expand="lg">
        <Navbar.Brand>
        <img src="BMS.png" style={{height:'50px',width:'150px',marginLeft:'30px'}}></img>
   </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav style={{margin:'auto',marginRight:'7px'}}>
          <Nav.Link href="/Aboutus" >
         <Button  variant='danger' size='sm' onClick={()=>{}} style={{width:'70px'}}>Aboutus</Button>{' '}
   </Nav.Link>
          <Nav.Link href="/Contactus" >
         <Button  variant='danger' size='sm' onClick={()=>{}}>Contactus</Button>{' '}
   </Nav.Link>
          </Nav>
        </Navbar.Collapse>
     </Navbar>
  
   <div style={{color:'red',
   textAlign:'center',
   justifyContent:'center',
   paddingTop:'120px',
   fontSize:"38px"}}>
    Welcome to BookMyShow
    </div>

   <div className={style.wtext}>
   <div >Bookmyshow is an online portal that helps pyou book tickets for movies.</div>
   <div> You can book your ticket from the comfort of your home with the Bookmyshow .</div>
   </div>

   {/* <Nav.Link href="/Content" className={style.button}>
         <Button  variant='danger' size='sm' onClick={()=>{}}>Get Started</Button>{' '}
   </Nav.Link> */}
    <Nav>
          <Nav.Link href="/Login" className={style.button}>
         <Button  variant='danger' size='sm' onClick={()=>{}} style={{width:'80px',fontSize:'16px'}}>Login</Button>{' '}
   </Nav.Link>
          <Nav.Link href="/Signup" style={{marginTop:'30px'}}>
         <Button  variant='danger' size='sm' onClick={()=>{}} style={{width:'80px',fontSize:'16px'}}>Sign Up</Button>{' '}
   </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/Content" style={{marginTop:'30px',marginLeft:'38rem'}}>
         <Button  variant='danger' size='sm' onClick={()=>{}} >Get Started</Button>{' '}
   </Nav.Link>
          </Nav>
    </div>
    </>
  )
}
