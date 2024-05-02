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
    <Card>
    <h3> Login For Your Account</h3> 
     <Form>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  
        onChange={(value)=>{
          console.log(value.target.value);
          setEmail(value.target.value);
        }}
        id="email" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password"
        onChange={(value)=>{
          console.log(value.target.value);
          setPassword(value.target.value);
        }}
         id="password" required/>
      </Form.Group>
      <a href="/Signup">Don't have an account?,Signup</a>

      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Login
      </Button>
      

    </Form>
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