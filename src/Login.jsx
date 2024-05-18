import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  // const [showPassword, setShowPassword] = useState(false);


  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  const formsubmission = () =>{
    fetch("http://localhost:4000/login",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body : JSON.stringify({email,password}),
    }).then((res)=>{
      res.json().then((data)=>{
        console.log(data);
        if(data==true)
        {
          navigate("/Content");
        }
        // else{
        //   navigate("/");
        // }
      })
    })
    console.log("Email is="+email);
    console.log("Password is="+password);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("Page clicked");
    formsubmission();
  };

  return (
    <>
    <Card style={{marginTop:'8%',marginLeft:'30%',marginRight:'30%',width:"430px",height:"300px"}}>
      <Card.Body>
        <center>
         <h3> Login For Your Account</h3> 
         </center>
   
     <Form>
      <Form.Group className="mb-2" style={{fontSize:"15px",fontWeight:"450",paddingTop:'5px'}}>
      <strong>
        <Form.Label>Email address</Form.Label>
        </strong>
        <Form.Control type="email" placeholder="Enter email"  style={{fontSize:"13px",fontWeight:"500"}} 
        onChange={(value)=>{
          console.log(value.target.value);
          setEmail(value.target.value);
        }}
        id="email" required />
      </Form.Group>

      <Form.Group className="mb-2" style={{fontSize:"15px",fontWeight:"450"}}>
        <strong>
        <Form.Label>Password</Form.Label>
        </strong>
        <Form.Control type="password" placeholder="Enter Password" style={{fontSize:"13px",fontWeight:"500"}} 
        onChange={(value)=>{
          console.log(value.target.value);
          setPassword(value.target.value);
        }}
         id="password" required/>
      </Form.Group>
      <a href="/Signup" style={{paddingTop:"8px"}}>Don't have an account?,Signup</a>

      <Button variant="primary float-end" type="submit" size="sm" onClick={handleSubmit} >
        Login
      </Button>
      

    </Form>
    </Card.Body>
    </Card>
    </>
  );
}




// const[email,SetEmail]=useState("");
// const [password,SetPassword]=useState("");
// const navigate=useNavigate();

// const handleSubmit = async (e)=>{
//   e.preventDefault();

//   try{
//   const response =await fetch("https://localhost:4000/login",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json",
//     },
//     body:JSON.stringify({email,password}),
//   });
// ``
//   const data=await response.json();

//   if (data.success){
//     // if authentication is successful ,navigate to the movies page
//     navigate("/Movies");
//   }
//   else{
//     // if authentication fails ,handle the error(like:show an error)
//     console.error("Authentication failed:",data.message);
//   }
//   }catch(error){
//     console.error("An error occurred during authentication:",error);
//   }
//   };