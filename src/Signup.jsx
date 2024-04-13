import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
 <>
  <Card  style={{marginTop:'8%',marginLeft:'30%',marginRight:'30%'}}>
      <Card.Body>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
       <Form.Label>Email address</Form.Label>  
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        Enter your email here. 
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label> 
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <a href="/Login">Don't have an account,Login</a>
      <Link to="/Movies">
      <Button   variant="primary float-end" type="submit"  size="sm">
        Submit
      </Button>
      </Link>
       </Form>
       </Card.Body>
      </Card>
     
    </>
    
  );
}

