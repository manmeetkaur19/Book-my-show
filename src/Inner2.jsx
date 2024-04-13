
import React from 'react';
import {  Image,Card,Row,Col, Container, ListGroup } from 'react-bootstrap';
import style from './CSS Module/Movie.module.css';
import { Link } from 'react-router-dom'; 
import Videoplay from './Videoplay';




export default function Inner({value,index,link}) {
  const topic=[
    {
      mname:"Jatt Nuu Chudail Takri",
      link:"D4LyZPfnznE",
    },
    {
      mname:"Yodha",
      link:"3AuB8RTfBJc",
    },
    {
      mname:"Blackia2",
      link:"1RCLn2iIXGA&t=44s",
    },
    {
      mname:"Shaitaan",
      link:'upDhKSx7P7E',

    },
    {
      mname:"Kung Fu Panda 4",
      link:"inKs4eeHiI"
    }
  ]
  return (
  <>
  <Container style={{maxWidth:'100%',backgroundImage:'blur'}}  >
   <div class="bg-image"   className={style.inner}  
       style={{backgroundImage:"url('https://assets-in.bmscdn.com/discovery-catalog/events/et00368739-wqbvtqnckw-landscape.jpg')"
     }}> 
    <Row>
    <Col>
    <Card style={{marginLeft:'45px',border:'none',borderRadius:'5px',backgroundColor:'black',color:'white'}}>
                <Image 
            variant="top"
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jatt-nuu-chudail-takri-et00368739-1710413132.jpg"
            alt="Jatt Nuu Chudail Takri"
            style={{display:'flex',borderTopRightRadius:'5px',borderTopLeftRadius:'5px'}}></Image>
              <center>
              <div >In Cinemas</div>
              </center>
              </Card>
              </Col>
              </Row>

              {topic.map((value,index)=>{
            return(
              <>
          
              <Videoplay value={value.mname} index={index} link={value.link}></Videoplay>
              
              
          <Link to={"video?/id="+link}></Link>
            
        <div style={{backgroundColor:'rgba(34, 34, 34, 0.8)',borderRadius:'12px',width:'5%',fontSize:'12px' ,position:'absolute',marginLeft:'12%'}}>
            <a href={"https://www.youtube.com/watch?v=D4LyZPfnznE"} style={{color:'white'}}>
              <center>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16" >
               <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg>
              <span>Trailer</span>
              </center>
              </a>

            </div>

            
            </>
            )
          }
        )}
          
             <Row style={{fontSize:'40px',paddingLeft:'32px',marginBottom:'20%',fontWeight:'500',color:'whitesmoke'}}>
            <Col>
              <div> 
              Jatt Nuu Chudail Takri</div>
              </Col> 
              </Row>

              <Row>
                <div className={style.star}> 
              {/* <Card style={{backgroundColor:'black',position:'relative'}}> */}
                <Col style={{backgroundColor:'black'}}>
                
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16" marginLeft="2px">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    </Col>
              {/* </Card> */}
              </div>
              </Row>
              </div> 
              </Container>    
        </> 
        
          
  )
}
       