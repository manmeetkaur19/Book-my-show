import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import style from './CSS Module/Movie.module.css';
import { useState } from 'react';
import axios from "axios";



export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });



  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
const navigate= useNavigate();

const handleChange = (e) => {


  const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,

    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('/Signup', formData);
        console.log(response.data);
        navigate("/Movies");
      } catch (error) {
        console.log(error);
      }
    } else {
      setFormErrors(errors)
      }
    };
  
    const validateForm = () => {
      const errors = {};
      const { email, password, confirmPassword } = formData;

      if (!email) errors.email = 'Email is required!';
      if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
        errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      }
      if (password !== confirmPassword) errors.confirmPassword = 'Password do not match';
  
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
      <Form.Group className="mb-2" controlId="formBasicEmail" style={{fontSize:"15px",fontWeight:"450"}}>
       <Form.Label>Email address</Form.Label>  
        <Form.Control style={{fontSize:"12px"}}  type="email"   
        onChange={handleChange} id="email" placeholder="Enter email" required/>
        {formErrors.email && formErrors.email}
        {/* <Form.Text className="text-muted">
        Enter your email here. 
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword"  style={{fontSize:"15px",fontWeight:"450"}}>
        <Form.Label>Password</Form.Label> 
        <Form.Control style={{fontSize:"12px"}} type={formData.showPassword ? 'text' : 'password'} name="password" placeholder="Password"  onChange={handleChange} required />
        {formErrors.password && formErrors.password}
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword" style={{fontSize:"15px",fontWeight:"450"}}>
        <Form.Label> Confirm password</Form.Label> 
        <Form.Control style={{fontSize:"12px"}} type={formData. showConfirmPassword ? 'text' : 'password'} name="password" placeholder="Confirm password"  onChange={handleChange} required/>
        {formErrors.confirmPassword && formErrors.confirmPassword}
      </Form.Group>
      <a href="/Login">Already have an account,Login</a>
      <Link to="/Movies">
      <Button   variant="primary float-end" type="submit"  size="sm" onClick={handleSubmit}>
        Signup
      </Button>
      </Link>
       </Form>
       </Card.Body>
      </Card>
      
     </div>
    </>
    
  );
}

