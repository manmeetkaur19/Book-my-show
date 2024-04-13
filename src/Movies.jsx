import {  Col, Container,  Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import style from './CSS Module/Movie.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Form } from 'react-bootstrap';



 export default function Movies() {
  const [searchQuery, setSearchQuery]=useState("");
  const filterCourses = (name) => {
    
     return name.toLowerCase().includes(searchQuery.toLowerCase());
  };
  const docs=[
    {
      mname:"Jatt Nu Chudail Takri",
      img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAxMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00368739-qqquklesel-portrait.jpg",
      desc:"Comedy/Horror"

    },
    {
      mname:"Yodha",
      img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxNS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318073-vnxhzuzaak-portrait.jpg",
      desc:"Action Thriller"
    },
    {
      mname:"Blackia2",
      img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNjI0IFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00366835-hywfldcdnm-portrait.jpg",
      desc:"Action/Crime/Drama"
    },
    {
      mname:"Shaitaan",
      img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgODEuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384234-namrszxlsp-portrait.jpg",
      desc:"Thriller"
    },
    {
      mname:"Kung Fu Panda 4 ",
      img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAxMC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-rxxpavyhrq-portrait.jpg",
      desc:"Action/Adventure/Comedy"
    },
  ]
  return (
    <>
      <div>
      <h2 className={style.events}> Recommended Movies</h2>
    </div>
   
    <Carousel>
    <Container>
    <Row>

    <Form.Control
                  type="text"
                  placeholder="Search for Movies"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ marginBottom: "10px" }}
                />
          {docs.map((value,index)=>{
            if(filterCourses(docs.mname)){
          return(
            <Col key={index}   className={style.pics}>
              <Card style={{borderRadius:'10px'}}>
            <img className={style.card} src={value.img} alt={value.mname}></img>
            </Card>
           <div>
           <div className={style.d}>{value.mname}</div>
            <desc className={style.v}>{value.desc}</desc>
            </div>
            </Col>
          );
          }})};
      </Row>
             </Container>
           </Carousel>
           </>
);
 } 
 
        
            {/* <Col>
       <Card style={{ borderRadius:'10px' ,}}  >
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAxMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00368739-qqquklesel-portrait.jpg "
      width="100%" height="100%" style={{borderRadius:'10px'}}/>
    </Card>
    <div  class={style.d}>Jatt Nu Chudail Takri</div>
     <div className={style.v}>Comedy/Horror</div> 
    </Col> */}

 
       {/* <Col>
        <Card style={{borderRadius:'10px'}}>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxNS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318073-vnxhzuzaak-portrait.jpg" alt="Yodha" width="100%" height="100%"
     style={{borderRadius:'10px'}} />
    </Card>
    <div className={style.d}>Yodha</div>
        <div className={style.v}>Action Thriller</div>
        </Col>

    <Col>
        <Card style={{borderRadius:'10px'}}>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNjI0IFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00366835-hywfldcdnm-portrait.jpg" alt="Blackia 2" width="100%" height="100%"
       style={{borderRadius:'10px'}} />
    </Card>
    <div className={style.d}>Blackia 2</div>
    <div className={style.v}>Action/Crime/Drama</div>
        </Col>

        <Col>
        <Card style={{borderRadius:'10px'}}>
      <Card.Img variant="top"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgODEuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384234-namrszxlsp-portrait.jpg" alt="Shaitaan" width="100%" height="100%"
       style={{borderRadius:'10px'}}  />
    </Card>
    <div className={style.d}>Shaitaan</div>
    <div class={style.v}>Thriller</div>
    </Col>


    <Col>
    <Card  style={{borderRadius:'10px'}}>
      <Card.Img variant="top"  alt="Kung Fu Panda 4"  class="sc-eykeme-1 jrtRfk"   src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAxMC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-rxxpavyhrq-portrait.jpg"
      width="100%" height="100%" style={{borderRadius:'10px'}}/>
    </Card>
    <div className={style.d}>Kung Fu Panda 4</div>
    <div class={style.v}>Action/Adventure/Comedy</div>
    </Col> 
    */}
    
   

   {/* <Container>
<Row>
  <Col>
  <Card style={{paddingTop:'8%',border:'10px'}}>
    <Card.Img variant='top'  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="Stream" width="100%" height="100%"/>
    </Card>
    </Col>
    </Row>
</Container>
<Movies1/> */}
   
 {/* <div>
 <h2 className={style.events1}>The Best Of Live Events</h2>
 </div>
   <Container>
  <Row>
    <Col>
    <Card style={{ width: '15rem',border:'10px'}}>
    <Card.Img variant='top'  alt="Workshops" width="100%" height="100%" class="sc-eykeme-1 jrtRfk"  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png"
    style={{borderRadius: '10px'}}/>
    </Card>
    </Col> */}

{/* <Col>
    <Card style={{ width: '15rem',border:'10px'}}>
    <Card.Img variant='top'  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/holi-parties-web-collection-202402261056.png" alt="Workshops And More" width="100%" height="100%"
    style={{borderRadius: '10px'}}/>
    </Card>
    </Col> */}


   {/* <Col>
    <Card style={{ width: '15rem',border:'10px'}}>
    <Card.Img variant='top'  alt="Comedy Shows"   src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" 
    width="100%" height="100%" style={{borderRadius: '10px'}}/>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '15rem',border:'10px'}}>
    <Card.Img variant='top'  alt="Music Shows" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png"
   style={{borderRadius: '10px'}}/>
    </Card>
    </Col>
  </Row>
  </Container> */}

//       <div style={{backgroundColor:'rgb(43, 49, 72)',marginTop:'40px'}}>
//      <Row>
//        <Col xs={1} style={{padding:'10px'}}>                                                                       {/* used to adjust padding */}
//        <Button variant="danger" style={{borderRadius:'65px',padding:'10px',marginLeft:'25px'}}> 
//      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
//   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>    
//   </svg> 
//  </Button>
//  </Col> 


  //  <Col xs={11} style={{color:'white',padding:'10px'}}>
  //   <h3>PREMIERE</h3>
  //   <h7>watch new movies at home,every friday</h7>
  //      </Col>
  //      </Row>
  //     <Col style={{color:'white',paddingTop:'3%',marginLeft:'3%'}}>
  //     <h3>Premieres </h3>
  //     <h6>Brand new releases every Friday</h6>
  //     </Col>
       
  //      <Row> 
  //    <Col style={{marginLeft:'3%',}}>
  //   <Card style={{ borderRadius:"10px"}} >                                                                        {/* cards border */}
  //    <Card.Img variant='top' alt="The Devil Conspiracy" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00391871-pkgccfrsaa-portrait.jpg"
  // style={{ borderRadius:"10px"}}  />                                                                              {/* //images border defined   */}
  //   </Card>
  //   <div className={style.t}>The Devil Conspiracy</div>
  //   <div className={style.t2}>English</div>
  //   </Col>  

  //   <Col>
  //   <Card style={{ borderRadius:'10px'}}>
  //   <Card.Img variant='top'  alt="Red Sandal Wood" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00354663-zvhcanmgub-portrait.jpg"
  //   style={ {borderRadius:"10px"}}/>
  //   </Card>
  //    <div className={style.t}>Red Sandal Wood</div>
  //   <div className={style.t2}>Tamil</div>
  //   </Col>

    // <Col>
    // <Card style={{borderRadius:'10px'}}>
    // <Card.Img variant='top'  alt="The Roundup: No Way Out" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00391374-rhpevagccv-portrait.jpg"
    // style={ {borderRadius:"10px"}}/>                                                                                     {/* //it gaves less than card border */}
    // </Card>
    //  <div className={style.t}>The Roundup: No Way Out</div>
    // <div className={style.t2}>Korean</div>
    // </Col>

    // <Col>
    // <Card style={{borderRadius:'10px'}}>
    // <Card.Img variant='top' alt="Dvandva" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00370047-hryqravrsg-portrait.jpg"
    // style={ {borderRadius:"10px"}}/> */}
    // </Card>
    // <div className={style.t}>Dvandva</div>
    // <div className={style.t2}>Kannada</div>
    // </Col>

//     <Col style={{marginRight:'35px'}}>
//     <Card style={{borderRadius:'10px'}}>
//     <Card.Img variant='top'  alt="Bobbyr Bondhura" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00027332-qdlvmpbsmg-portrait.jpg"
//     style={ {borderRadius:"10px"}}/>
//     </Card>
//     <div className={style.t}>Bobbyr Bondhura</div>
//     <div className={style.t2}>Bengali</div>
//     </Col>
//     </Row>
//     </div >
    
//     <div>
//     <h2 className={style.events}>Your Music Studio</h2>
//     </div>
//     <Container>
//     <Row>
//     <Col >
//     <Card style={{width:'15rem',borderRadius:'10px'}}>
//     <Card.Img variant='top' alt="BMW Joytown 2024" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00386991-anltfykwss-portrait.jpg"
//     style={ {borderRadius:"10px"}}/>
//     </Card>
//     <div className={style.d}>BMW Joytown 2024</div>
//     <div className={style.v}>Mahalaxmi Race Course: Mumbai</div>
//     <div className={style.v}>Concerts</div>
//        </Col>
  
//     <Col >
//     <Card style={{ width:'15rem',borderRadius:'10px'}}>
//     <Card.Img variant='top' alt="Realm Of A Poet - Shayar Sartaaj Live - Chandigarh" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00385391-ynbjzfbvxh-portrait.jpg"
//     style={{borderRadius:"10px"}}/>
//     </Card>
//     <div className={style.d}>Realm Of A Poet - Shayar Sartaaj Live - Chandigarh</div>
//     <div className={style.v}>Sector 34 Exibition Ground: Chandigarh</div>
//       <div className={style.v}>  Concerts</div>
//     </Col>

//     <Col  style={{paddingRight:'30%'}}>
//     <Card  style={{width:'15rem',borderRadius:'10px'}}>
//     <Card.Img  width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00362185-yvlwphrsfn-portrait.jpg"
//     style={ {borderRadius:"10px"}}/>
//     </Card>
//     <div className={style.d}>Mehfill E Sartaaj - India Tour</div>
//     <div className={style.v}>Multiple Venues</div>
//    <div className={style.v}>Concerts</div>
//     </Col>
//     </Row>
//     </Container>

//     <div className={style.events1}>Outdoor Events
//     </div>
//    <Container>
//     <Row>
//       <Col>
//       <Card style={{borderRadius:"10px"}}>
//       <Image alt="BMW Joytown 2024" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00386991-anltfykwss-portrait.jpg"
//         style={{borderRadius:'10px'}}>
//         </Image>
//       </Card>
//       <div className={style.d}>BMW Joytown 2024</div>
//       <div class={style.v}>Mahalaxmi Race Course: Mumbai</div>
//       </Col>

//       <Col>
//       <Card  style={{borderRadius:'10px'}} >
//       <Image alt="Gaurav Gupta Live - India Tour" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358468-uvzjfbsums-portrait.jpg"
//         style={{borderRadius:'10px'}}>
//         </Image>
//       </Card>
//       <div class={style.d}>Gaurav Gupta Live-India Tour</div>
//       <div class={style.v}>Indian Academy Of Fine Arts : Amritsar</div>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image  alt="Sadda Pind, Amritsar" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyNSBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00057357-spstztdreq-portrait.jpg"
//       style={{borderRadius:'10px'}}>
//         </Image>
//       </Card>
//       <Col>
//       <div class={style.d}>Sadda Pind, Amritsar</div>
//       <div class={style.v}>Sadda Pind: Amritsar</div>
//       </Col>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image  alt="Rajasthan Royals vs Delhi Capitals" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyOCBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00391082-lvtlfwqsew-portrait.jpg"
//       style={{borderRadius:'10px'}}>
//         </Image>
//       </Card>
//       <div class={style.d} >Rajasthan Royals vs Delhi Capitals</div>
//       <div class={style.v}>Sawai Mansingh Stadium: Jaipur</div>
//       </Col>

//       <Col>
//       <Card  style={{borderRadius:'10px'}}>
//       <Image alt="Sahi Gall AA ft. Manpreet Singh" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00320704-tenwchftgc-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <Col>
//       <div className={style.d}>Sahi Gall AA ft.Manpreet Singh</div>
//       <div className={style.v}>Indian Academy Of Fine Arts : Amritsar</div>
//       </Col>
//       </Col>
//     </Row>
//    </Container>
   

//  <div  className={style.events1}>
//   Laughter Therapy
//   </div>
//  <Container>
//     <Row>
//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image alt="Abhishek Upmanyu LIVE - Amritsar" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00373697-mbscugwmkw-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <Col>
//       <div class={style.d}>Abhishek Upmanyu LIVE - Amritsar</div>
//       <div class={style.v}>Venue to be Announced: Amritsar</div>
//       </Col>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image    alt="Kisi Ko Batana Mat Ft. Anubhav Singh Bassi " width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-tkflfwazns-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <div class={style.d}>Kisi Ko Batana Mat Ft. Anubhav Singh Bassi&nbsp;</div>
//       <div class={style.v}>Solitaire Grand Resort: Sri Ganganagar</div>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image alt="Picche kya Bajta hai? ft. Pritish Narula" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBNYXk%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00359839-pefzfuacmu-portrait.jpg"
//      style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <div class={style.d}>Picche kya Bajta hai? ft. Pritish Narula</div>
//       <div class={style.v}>Venue to be Announced: Amritsar</div>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image alt="Abhishek Upmanyu LIVE" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00373752-bdqepzyuhb-portrait.jpg"
//       style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <Col>
//       <div class={style.d}>Abhishek Upmanyu LIVE</div>
//       <div class={style.v}>Multiple Venues</div>
//       </Col>
//       </Col>


//       <Col  >
//       <Card style={{borderRadius:'10px'}}>
//       <Image  alt="OML Comedy Pit Stop" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00312421-nwrltqptjp-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//       </Image>
//       </Card> 
//       <Col>
//       <div class={style.d}>OML Comedy Pit Stop</div>
//       <div class={style.v}>Multiple Venues</div>
//       </Col>
//       </Col>
//       </Row>
//       </Container>
 
//     <div>
//     <h2 class={style.events1}>Popular Events</h2>
//     </div>
//     <Container>
//     <Row>
//       <Col>
//       <Card style={{border:'10px'}}>
//       <Image  alt="BMW Joytown 2024" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00386991-aendnrfubx-portrait.jpg"
//         style={{borderRadius:'10px'}}>
//        </Image>
//      </Card>
//      <Col>
//      <div class={style.d}>BMW Joytown 2024</div>
//      <div class={style.v}>Mahalaxmi Race Course: Mumbai</div>
//      </Col>
//       </Col>

//       <Col>
//       <Card style={{border:'10px'}}>
//       <Image  alt="Exposure Math - Capture Any Photography Genre" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00369125-haxjbrjvfp-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//     </Image>
//      </Card>
//      <Col>
//      <div class={style.d}>Exposure Math - Capture Any Photography Genre</div>
//      <div class={style.v}>Delhi Zoo: Delhi</div>
//      </Col>
//       </Col>


//       <Col>
//       <Card style={{borderColor:'light',borderRadius:'10px'}}>
//       <Image  alt="Talk Session in Culinary Arts (Ft. Joao Garcia)" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00362657-utpyqalndc-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//      </Image>
//      </Card>
//      <Col>
//      <div class={style.d}>Talk Session in Culinary Arts (Ft. Joao Garcia)</div>
//      <div class={style.v}>Watch on Zoom.</div>
//      </Col>
//       </Col>
{/* 
      <Col >
      <Card style={{borderColor:'light',borderRadius:'10px'}}>
      <Image  alt="Talk Session in Business (Ft. Karthik Gunasekaran)" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00362646-qrujlzurkp-portrait.jpg"
       style={{borderRadius:'10px'}}>
    </Image>
    </Card>
    <Col>
    <div class={style.d}>Talk Session in Business (Ft.Karthik Gunasekaran)</div>
    <div class={style.v}>Watch on Zoom.</div>
    </Col>
      </Col>

      <Col>
      <Card style={{borderColor:'light',borderRadius:'10px'}}>
      <Image  alt="Talk Session in Med-Science (Ft. Malhar Patel)" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00362651-ycgkdpfeex-portrait.jpg"
       style={{borderRadius:'10px'}}>
      </Image>
     </Card>
     <Col>
     <div class={style.d}>Talk Session in Business (Ft.Karthik Gunasekaran)</div>
     <div class={style.v}>Watch on Zoom.</div>
     </Col>
      </Col>
      </Row>
      </Container> */}

      
 
