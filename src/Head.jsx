import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './CSS Module/Movie.module.css'

export default function Head() {
  return (
    <>
    <Navbar className={style.head}>
       <Container  >  
        <Nav className={style.y}> 
         <Nav.Link href="#">Movies</Nav.Link>
       <Nav.Link>Stream</Nav.Link>
      <Nav.Link href="#features">Events</Nav.Link>
    <Nav.Link href="#pricing">Plays</Nav.Link>
    <Nav.Link href="#pricing">Sports</Nav.Link>
    <Nav.Link href="#pricing">Activities</Nav.Link>
          </Nav>
        
        
        <Nav className={style.y2}>
            <Nav.Link>Listyourshow</Nav.Link>
      <Nav.Link href="#features">Corporates</Nav.Link>
    <Nav.Link href="#pricing">Offers</Nav.Link>
    <Nav.Link href="#pricing">GiftCards</Nav.Link>
   </Nav>
          </Container>
      </Navbar>
      </>
  )
}