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
        
      <Nav.Link href="/Movies">Movies</Nav.Link>
         <Nav.Link href="/Movies">Coming Soon</Nav.Link>
        </Nav>

        <Nav className={style.y2}>
            <Nav.Link>Listyourshow</Nav.Link>
      <Nav.Link href="">Corporates</Nav.Link>
    <Nav.Link href="#">Offers</Nav.Link>
    <Nav.Link href="#pricing">GiftCards</Nav.Link>
   </Nav>
          </Container>
      </Navbar>
      </>
  )
}