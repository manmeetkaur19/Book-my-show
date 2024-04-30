import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link} from 'react-router-dom';
// import { useState } from 'react';


export default function Login() {
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
  return (
    <>
      
    {/* <div class="bg-image"  style={{minHeight:"100vh"}}
    style={{backgroundImage:"url('https://vectorstate.com/stock-photo-preview/138319894/ist_40649_00005.jpg')"}} > */}
    <span>Login</span>
    <Card style={{marginTop:'8%',marginLeft:'30%',marginRight:'30%'}}>
      <Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         onChange={(e)=>SetEmail(e.target.value)} />
        <Form.Text className="text-muted">
          Enter your email here. 
        </Form.Text>
      </Form.Group>
                          
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>SetPassword(e.target.value)}/>
      </Form.Group>
      <Link to="/Movies">
      <Button variant="primary" type="submit">
        Login
      </Button>
      </Link>
    </Form>
    </Card.Body>
    </Card>
    {/* </div> */}
    </>
  );
}