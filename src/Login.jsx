import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <>
    {/* <div class="bg-image"  style={{minHeight:"100vh"}}
    style={{backgroundImage:"url('https://vectorstate.com/stock-photo-preview/138319894/ist_40649_00005.jpg')"}} > */}
    <Card style={{marginTop:'8%',marginLeft:'30%',marginRight:'30%'}}>
      <Card.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Enter your email here. 
        </Form.Text>
      </Form.Group>
                          
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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