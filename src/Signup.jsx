import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import style from './CSS Module/Movie.module.css';


export default function Signup() {
  return (
<>
 <div className={style.body}>
  <Card  style={{marginTop:'8%',marginLeft:'30%',marginRight:'30%',width:"450px",height:"350px"}}>
      <Card.Body>
        <center>
      <h2>Sign Up </h2>
      </center>
    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail" style={{fontSize:"15px",fontWeight:"450"}}>
       <Form.Label>Email address</Form.Label>  
        <Form.Control type="email" placeholder="Enter email"   style={{fontSize:"12px"}} />
        <Form.Text className="text-muted">
        Enter your email here. 
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword"  style={{fontSize:"15px",fontWeight:"450"}}>
        <Form.Label>Password</Form.Label> 
        <Form.Control type="password" name="password" placeholder="Password" style={{fontSize:"12px"}} />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword" style={{fontSize:"15px",fontWeight:"450"}}>
        <Form.Label>Re-enter password</Form.Label> 
        <Form.Control type="password" name="password" placeholder="Re-enter password" style={{fontSize:"12px"}} />
      </Form.Group>
      <a href="/Login">Already have an account,Login</a>
      <Link to="/Movies">
      <Button   variant="primary float-end" type="submit"  size="sm">
        Submit
      </Button>
      </Link>
       </Form>
       </Card.Body>
      </Card>
      
     </div>
    </>
    
  );
}

