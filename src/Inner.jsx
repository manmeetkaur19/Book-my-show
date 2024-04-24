import React from 'react';
import {  Image,Card,Row,Col, Container, Button } from 'react-bootstrap';
import style from './CSS Module/Movie.module.css';
import {  Link, useLocation, useParams } from 'react-router-dom'; 
import Footer from './Footer';





export default function Inner () {

    // const selectedItem = docs[index];
  const state= useLocation();
  console.log(state.state.value)
  var data = state.state.value;
  // const{mname,img,desc}=state;
  
  // const {state}=location.state;

  // console.log(state)

  
  const { id } = useParams();
  
  const cast=[
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gippy-grewal-18404-17-12-2021-06-58-27.jpg",
      name:"Gippy Grewal",
     role:"as Jallaludin ",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sargun-mehta-1066825-30-01-2017-07-40-56.jpg",
      name:"Sargun Mehta",
      role:"Actor",
    
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/roopi-gill-1263571-24-12-2018-02-07-32.jpg",
      name:"Roopi Gill",
      role:"Actor",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nirmal-rishi-8449-1710338767.jpg",
      name:"Nirmal Rishi",
      role:"Actor",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bn-sharma-2015555-1657102956.jpg",
      name:"BN Sharma",
      role:"Actor",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ravinder-mand-2002800-26-09-2019-04-38-28.jpg",
      name:"Ravinder Mand",
      role:"Actor",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amrit-amby-2016054-03-01-2022-06-29-01.jpg",
      name:"Amrit Amby",
      role:"Actor",

    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deedar-gill-1263711-26-12-2018-03-54-41.jpg",
      name:"Deedar Gill",
      role:"Actor",
    }
  ]  
  const crew=[
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikas-vashisht-2018421-1651238508.jpg",
      name:"Vikas Vashisht",
      role:"Director",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ravi-dubey-16823-26-04-2017-16-20-28.jpg",
      name:"Ravi Dubey",
      role:"Producer",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jaani-iein082810-15-03-2022-12-35-35.jpg",
      name:"Jaani",
      role:"Producer",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amberdeep-singh-1044303-13-01-2017-02-46-42.jpg",
      name:"Amberdeep Singh",
      role:"Writer",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/avvy-sra-2023169-1666937032.jpg",
      name:"Avvy Sra",
      role:"Musician",
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/navneet-misser-1091749-1707479680.jpg",
      name:"Navneet Misser",
      role:"Cinematographer",
    },
    ]
  
  return (
  <> 
 
  <Container  style={{maxWidth:'100%'}}  >
    {/* <div class="bg-image"    className={style.inner} >
    
       {/* style={{backgroundImage:"url('https://assets-in.bmscdn.com/discovery-catalog/events/et00368739-wqbvtqnckw-landscape.jpg')"
    //  }}>   */} 
    <div style={{height:'80vh',backgroundSize: 'cover', backgroundImage:`linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%), url(${data.img})` }} className={style.inner}>
     
     <Row>
    <Col xs={3}>
    <Card style={{marginTop:'30px',height:'60vh',width:'38vh',marginLeft:'63px',border:'none',backgroundColor:'black'}}>
               {/* <Link to={"/Videoplay?id=" + data.link}> */}
                <Image 
            variant="top"
            src={data.img}
            alt="Jatt Nuu Chudail Takri"
            style={{display:'flex',borderTopRightRadius:'5px',borderTopLeftRadius:'5px',height:'55vh',width:'38vh'}}></Image>
            {/* </Link> */}
              <center>
              <div style={{color:'white'}}>In Cinemas</div>
              </center>
              </Card>
              </Col>
        
              <Col  xs={2} style={{backgroundColor:'rgba(34, 34, 34, 0.8)',borderRadius:'12px',width:'5%',fontSize:'12px' ,
              position:'absolute',marginLeft:'12%',marginTop:'15%'}}>
                 
              <Link to={"/Videoplay?id=" + data.link} style={{textDecoration:'none',color:'white'}}>
              <center>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16" >
               <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg> */}
              <span>Trailer</span>
              </center>
              </Link>
              </Col>
             
            <Col xs={8}>
              <div style={{fontSize:'40px',paddingLeft:'5px',marginTop:'30px',fontWeight:'500',color:'white'}}> 
              {data.mname}</div>
              <Row>
              <Col xs={1}>
               <div  className={style.info}>UA</div> 
               </Col>
               <Col xs={5} >
              <div className={style.lang}>Punjabi</div>
              </Col>
              </Row>
              <div style={{color:'white',fontWeight:'400',paddingTop:'15px',paddingLeft:'10px'}}>2h 34m
              <span className={style.dot}>.</span>
              <span >Comedy, Horror</span>
              <span className={style.dot}>.</span>
              <span >15 March,2024</span>
              </div>
              <Link to="/Bookticket">
              <Col xs={4} style={{paddingTop:'23px'}}>
              <Button size="lg" variant="danger">Book Tickets</Button>{' '}
              
              </Col>
              </Link>
              </Col>
              </Row>
              </div>
               </Container> 
              <div>
              <Row >
               <h3 style={{paddingTop:"510px",marginLeft:'40px',fontWeight:'500'}}>About the movie</h3>
              <span className={style.aboutmovie}>{data.minfo}</span>
               </Row>
               
                <div style={{marginTop:'35px',marginLeft:'40px'}}>
                  <h3>Cast</h3>
                  </div>
                <div  style={{overflowX: 'auto'}}>
                {cast.map((value,index)=>{
                   return(
                    <Col key={index} style={{ display: 'inline-block', marginRight: '10px',marginLeft:"40px",marginTop:"15px" }}>
                   {/* onClick={()=>{navigate("/Inner",{ state: {value} })}} */}
                      <Card style={{borderRadius:'100vh', height:'10rem',width:'10rem'}}>
                        <img className={style.img}  src={value.img}></img>
                    </Card>
                   <div>
                   <div className={style.name}>{value.name}</div>
                    <div  className={style.role}>{value.role}</div>
                    
                    </div>
                    </Col>
                    )
                  })}
                   </div>
                   <div style={{marginTop:'35px',marginLeft:'40px'}}>
                  <h3>Crew</h3>
                  </div>
                  <div  style={{overflowX: 'auto'}}>
                {crew.map((value,index)=>{
                   return(
                    <Col key={index} style={{ display: 'inline-block', marginRight: '10px',marginLeft:"40px",marginTop:"15px" }}>
                      <Card style={{borderRadius:'100vh', height:'10rem',width:'10rem'}}>
                        <img className={style.img}  src={value.img}></img>
                    </Card>
                   <div>
                   <div className={style.name}>{value.name}</div>
                    <div  className={style.role}>{value.role}</div>
                    
                    </div>
                    </Col>
                    )
                  })}
                  </div>
                  </div>
                  <Footer/>
               </> 
        
          
  )
}

       