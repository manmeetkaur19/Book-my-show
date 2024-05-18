import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import style from './CSS Module/Movie.module.css';
import meet from './assets/meet.png'
import Sanjot from './assets/Sanjot.png'
import Nav from './assets/Nav.png'
// C:\Users\Dell\Documents\Projectwork react\Book My Show\Frontend\src\assets\meet.png
export default function Aboutus() {
  return (
    <>
   <div className={style.h1}>
   <h1 style={{textAlign:'center',color:"black"}}> <strong> <i> <b>  About BookMyShow </b></i></strong></h1>
   </div>
        <br></br>
   <div style={ {marginTop:"2px"}} >
    <center>
    <h2>  <strong> <b><i> Book tickets by choice  </i></b> </strong></h2>
    </center>
  <center>
    <font color="black" size="+1.5"> Bookmyshow is an online portal that helps people to book tickets for their favorite upcoming or loved movies from their Smartphones,Desktops,PC. <br></br>People can easily book their movie tickets online using our site from comfort of their homes with just one click.</font></center>
        
        <div className={style.fpic}>
         <p style={{textAlign:'center',textTransform:"uppercase",color:'white'}}>
        <span style={{display:'block',fontSize:"30px"}}>WE ARE</span>
        <span style={{fontSize:'81px',fontWeight:'700'}} >Movie Buffs</span></p>
        </div>
 
    </div>

    <div style={{marginTop:"30px",lineHeight:"25px"}}>
    <center>

        <font color="black">
         <h2>  <strong> <b><i> Our Mission  </i></b> </strong></h2>
           <br></br>
           Our aim is to provide our customers better services , movie details/information and also they can book their tickets from anywhere ,anytime through Tablets,Computers,Mobiles etc.
           BookMyShow is an aggregator service for the entertainment industry whereby we can assist you with information and ticketing for movies across many cities all over India.
           <br>
           </br>
            It is a popular entertainment ticketing platform that allows users to book tickets for  movies.
        <br></br>
         This movie ticket booking app is a smart app that allows users to book tickets online for their favorite upcoming movies directly from their smartphones. Users can easily browse available movies, choose time slots, and select their preferred seats to complete the ticket booking process securely within the app. 
       
        </font>
    </center>
    </div>
{/* 
    <img src='https://miro.medium.com/v2/resize:fit:1400/1*9aDwznIgM4afyIjAJPhkkg.png' style={{width:"100%",paddingTop:'20px'}}></img>

   <br></br>
   <font color="black" size="+1" >According to above pictograph bookmyshow has highest percentage rate as compared to others.</font>
    <br></br> */}
    <div style={{backgroundColor:"crimson"}}>
<Container style={{marginTop:'40px'}}>
<center>
    <h2 style={{paddingTop:"35px"}}>  <strong> <b><i> Our Team </i></b> </strong></h2>
    </center>
    {/* <div  className={style.ccentered} style={ {marginTop:"1630px"}}> */}
    
      {/* <img src="https://th.bing.com/th/id/OIP.S5o8lMiRMhCv0dbl52cnogHaE8?w=600&h=400&rs=1&pid=ImgDetMain" width={1350} height={130}></img>
     <div className={style.centered}> <font color="black"><h1 ><strong> Meet Our Talented Team</strong></h1></font> </div> */}
<center><b style={{lineHeight:'10px'}}> Teamwork makes the Dream Work </b>
<br></br> Welcome to the team! We are a group of passionate individuals work together to achieve our goals.<br></br> Get to know the faces behind our success.
</center>
{/* </div> */}


                  <br></br>
                  <Row>
                <div  style={{overflowX: 'auto', display: 'flex'}}>
               
                    <Col style={{ display: 'inline-block', marginRight: '10px',marginLeft:"40px",marginTop:"15px" }}>
                    <div style={{borderRadius:'100vh', height:'8rem',width:'8rem'}}>
                        <img className={style.img}  src={Nav} ></img>
                        </div>  <div style={{marginRight:"80px",marginLeft:"14vh"}}><b>Navreen Kaur</b></div>
                    <br></br>
                   <div>
                   {/* <div className={style.name}></div> */}
                    {/* <div  className={style.role}></div> */}
                    
                    </div>
                    </Col>

                    <Col style={{ marginRight: '10px',marginLeft:"40px",marginTop:"15px" }}>
                   <div style={{borderRadius:'100vh', height:'8rem',width:'8rem'}}>
                     <img src={meet}  className={style.img}></img>
                   </div>
                    <div style={{marginRight:"80px",marginLeft:"14vh"}}><b>Manmeet Kaur</b></div>
                    <div>
                   </div>
                    </Col>

                 <Col style={{marginRight: '10px',marginLeft:"40px",marginTop:"15px" }}>
                   
                   <div style={{borderRadius:'100vh', height:'8rem',width:'8rem',marginRight:"10px"}}>
                     <img className={style.img}  src={Sanjot} ></img>
                 </div> 
                 <div style={{marginRight:"80px",marginLeft:"15vh"}}><b>Sanjot Kaur</b></div>
                 
                 </Col>

                    </div>
                    </Row> 
                    <br></br>
                    <br></br>
                    </Container>
                    </div>
                    <center>
                    <h2 style={{paddingTop:'40px'}}>  <strong> <b><i> To Know More About Us</i></b> </strong></h2></center>
                   
      <div  className={style.llastpic}>
        <img src="https://www.techuz.com/blog/wp-content/uploads/2019/08/Online-Movie-Ticket-Booking-Banner-1-1280x720.jpg" 
        style={{width:"80rem",height:'35rem'}}></img>   
        <br></br>
        <center>
        <Link to="/Contactus">
          <button type="button" class="btn btn-black" style={{marginTop:'30px',fontSize:'20px',backgroundColor:"crimson",borderRadius:'70px',textAlign:'center'}}><b><strong>Contact Us</strong></b></button> </Link></center>
          {/* <div className={style.lltext}> <strong><b> <font color="Black" size="+2">  */}
        {/* <center>Own Your Future By</center>Smarter, faster corporate e-learning.</font> </b></strong><br></br> <center> */}
          
       {/* </div> */}
          </div>  
      </>
  )
}