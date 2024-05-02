import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import style from './CSS Module/Movie.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import axios from "axios";



export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
};
//usestate  for inputs
const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();


  
  const [formErrors, setFormErrors] = useState({});

  const formSubmission = () =>   {
    fetch("http://localhost:4000/signup",{
  method:'post',
  headers:{
  "Content-Type":"application/json",
},
body : JSON.stringify({username,email,password})

    }).then((res)=>{
      res.json().then((data)=>{
        console.log(data);
        if(data)
        {
          navigate("/Login");
        }
        else{
          navigate("/");
        }
      })
    })

    console.log("Email is="+email);
    console.log("Password is="+password)
  };

  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // });


const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      formSubmission();
      // try {
      //   const response = await axios.post('/Signup', formData);
      //   console.log(response.data);
      //   navigate("/Movies");
      // } catch (error) {
      //   console.log(error);
      // }
    } 
    else {
      setFormErrors(errors)
      }
    };
  
    const validateForm = () => {
      const errors = {};
      // const { email, password, confirmPassword } = formData;
      const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!username){errors.username='Username is required!';}
      if (!email) {errors.email = 'Email is required!';}
      if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      } 
      // else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      //   errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      // }
      if (password !== confirmPassword) {errors.confirmPassword = 'Password do not match';}
  
      return errors;
    };
  


  return (
<>
<div data-aos="zoom-out"></div>
 <div className={style.body}>
  <Card  style={{marginTop:'8%',marginLeft:'30%',marginRight:'30%',width:"450px",height:"360px"}}>
      <Card.Body>
        <center>
      <h2>Sign Up </h2>
      </center>
    <Form>
    <Form.Group className="mb-2" style={{fontSize:"15px",fontWeight:"450"}}>
       <Form.Label>Username</Form.Label>  
        <Form.Control style={{fontSize:"12px"}}  type="text"   
       placeholder="Enter username" 
       onChange={(e)=>
        setUsername(e.target.value)} name = "username" id='username' required
        />
        {formErrors.username}
      </Form.Group>

      <Form.Group className="mb-2"  style={{fontSize:"15px",fontWeight:"450"}}>
       <Form.Label>Email address</Form.Label>  
        <Form.Control style={{fontSize:"12px"}}  type="email"   
         placeholder="Enter email" onChange={(e)=>
          setEmail(e.target.value)} name='email' id='email'
         required/>
        {formErrors.email}
        {/* <Form.Text className="text-muted">
        Enter your email here. 
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-2"   style={{fontSize:"15px",fontWeight:"450"}}>
        <Form.Label>Password</Form.Label> 
        <Form.Control style={{fontSize:"12px"}} type={showPassword ? 'text' : 'password'}
        placeholder="Password"  onChange={(e)=>
        setPassword(e.target.value)} name='password' id='password' required />
        <Button onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </Button>
        {formErrors.password }
      </Form.Group>

      <Form.Group className="mb-2"  style={{fontSize:"15px",fontWeight:"450"}}>
        <Form.Label> Confirm password</Form.Label> 
        <Form.Control style={{fontSize:"12px"}} type={showConfirmPassword ? 'text' : 'password'} 
        placeholder="Confirm password"  onChange={(e)=>
        setConfirmPassword(e.target.value)} 
        id="confirmPassword" required/>
        <Button onClick={toggleConfirmPasswordVisibility}>
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </Button>
        {formErrors.confirmPassword}
      </Form.Group>
      <a href="/Login">Already have an account,Login</a>
      {/* <Link to="/Content"> */}
      <Button   variant="primary float-end" type="submit"  size="sm" 
      onClick={handleSubmit}>
        Signup
      </Button>
      {/* </Link> */}
       </Form>
       </Card.Body>
      </Card>
      
     </div>
    </>
    
  );
}

