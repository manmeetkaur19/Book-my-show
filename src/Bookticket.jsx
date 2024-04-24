import React, { useState } from 'react'
import Head from './Head'
import { Row ,Col, Table, Button, Card, Form, FormGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './CSS Module/Ticket.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Footer from './Footer';






export default function Bookticket() {
  const [isHovered, setIsHovered] = useState(false);
  const time=[
    {
     day:"FRI",
     date:"19",
     month:"APR",
    },
    {
      day:"SAT",
      date:"20",
      month:"APR",
    },
    {
      day:"SUN",
     date:"21",
     month:"APR",
    },
  ]
  const [priceRange, setPriceRange] = useState('');

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

 
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
<Card style={{height:'250px'}}>
    {/* <Content/> */}
<Head/>
    <Row>
        <Link to="/Inner" style={{textDecoration:'none',color:'black'}}>
    <h2 style={{marginTop:'30px',marginLeft:'20px',fontWeight:'normal'}}>
        Jatt Nuu Chudail Takri - Punjabi
    </h2>
    </Link>
    </Row>
    <Row>
      <Col style={{ display: 'flex'}}>
    <div  className={style.desc} style={{ marginRight: '10px' }}>UA</div>
    <span className={style.desc2} style={{ marginLeft: '10px' }}>Comedy</span>
    <span className={style.desc2} style={{ marginLeft: '10px' }}>Horror</span>
    </Col>
    </Row>
    <Row>
      <Table>
        <tbody >
         <tr style={{borderColor:'lightgray'}}>
      <td > </td>
      </tr>
  </tbody>
</Table>
</Row>

<Row>
  <Col style={{display:'flex'}}>
    
<Button  size="sm"  type="button" variant='light' 
style={{background:'0px',
hover:'black',
marginLeft:'10px',
border:'none',
alignContent:'center',
width:'40px',
 }} >                                          
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="grey"  viewBox="0 0 16 16" >
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>    
 </Button>{' '} 
     <div style={{backgroundColor:'red',
     display: 'flex',
    flexDirection: 'column',
    color:'white',
    marginLeft:'10px',
    borderRadius:'10px',
    height:'60px',
    paddingTop:'10px',
    alignItems:'center',
    width:'50px',
    fontSize:'10px'}}>
      <Link to="/Bookticket" style={{textDecoration:'none',color:'white'}} >
       <center>
          <div className={style.day}>THU</div>                             {/* // Add transition for smooth hover effect  // Change background color on hove */} {/* // Restore background color on mouse leave */}
          <div className={style.date}>18</div>
          <div className={style.day}>APR</div>
          </center>
          </Link>
          </div> 
          
          {time.map((value,index)=>{
            return(
         <div key={index} 
          onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
          style={{
             color: isHovered ? 'red' : 'black',
           transition: 'color 0.3s ease',marginLeft:'20px',marginTop:'10px'
     }}>
        <div className={style.day}>
          {value.day}
          </div>
            <div className={style.date}>{value.date}</div>
            <div className={style.day}>{value.month}</div>
             </div> 
          )
        })}
        <Button  size="sm"  type="button" variant='light' 
        style={{background:'0px',
        hover:'black',
        marginLeft:'60px',
        border:'none',
        alignContent:'center',
        width:'40px',
         }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="grey" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>
  </Button>

  <Form  size="lg" style={{marginLeft:'44%',textAlign:'center',width:"168px",fontsize:'10px'}}>
       <Form.Group controlId="priceRange" > 
       <Form.Control as="select" value={priceRange} onChange={handlePriceChange} style={{height:'40px'}} className="price-select">
          <option value=""disabled style={{fontSize:'0px'}}>Select Price Range</option>
          <option value="Rs. 0-200" style={{fontSize:'15px',marginTop:'10px'}}>Rs. 0-200</option>
          <option value="Rs. 201-300" style={{fontSize:'15px'}}>Rs. 201-300</option>
          <option value="Rs. 301-400" style={{fontSize:'15px'}}>Rs. 301-400</option>
          <option value="Rs. 401-500" style={{fontSize:'15px'}}>Rs. 401-500</option>
        </Form.Control>
      </Form.Group>
    </Form>

    <Card  style={{height:'40px',marginLeft:'5px',marginRight:'5px',borderRadius:'8px',border:'dark'}}>
    <DropdownButton  style={{marginLeft:'0px',marginRight:"0px",fontSize:'10px',background:'0px'}} id="dropdown-basic-button" variant="light" title="Filter Movie Timings">
      <Dropdown.Item href="#">
        <Row>
          <Col xs={2} style={{fontSize:"14px"}}>
        Morning  
        </Col>
        <Col xs={1} style={{fontSize:'10px',marginLeft:"43px",marginTop:"6px",color:"grey"}}>
        12:00-11:59 A.M
       </Col>
        </Row>
        </Dropdown.Item>
        
      <Dropdown.Item href="#">
      <Row>
          <Col xs={2} style={{fontSize:"14px"}}>
        Afternoon
        </Col>
        <Col xs={1} style={{fontSize:'10px',marginLeft:"43px",marginTop:"6px",color:"grey"}}>
        12:00-3:59 P.M
       </Col>
        </Row>
        </Dropdown.Item>
      <Dropdown.Item href="#">
      <Row>
          <Col xs={2} style={{fontSize:"14px"}}>
        Evening
        </Col>
        <Col xs={1} style={{fontSize:'10px',marginLeft:"43px",marginTop:"6px",color:"grey"}}>
        4:00-6:59 P.M
       </Col>
        </Row>
      </Dropdown.Item>
      <Dropdown.Item> 
      <Row>
          <Col xs={2} style={{fontSize:"14px"}}>
        Night
        </Col>
        <Col xs={1} style={{fontSize:'10px',marginLeft:"43px",marginTop:"6px",color:"grey"}}>
        7:00-11:59 P.M
       </Col>
        </Row>
      </Dropdown.Item>
    </DropdownButton>
    </Card> 
    </Col>
</Row>
</Card>

<Card style={{marginTop:'20px',height:'350px'}}>
  <Table>
    <tbody style={{height:'25px'}}>
    <tr>
    <td style={{paddingBottom:'10px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-dot" viewBox="0 0 16 16" style={{marginLeft:'1000px'}} >
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>
<div style={{fontSize:'11px',color:'grey',display:"inline-block"}}>AVAILABLE</div>

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-dot" viewBox="0 0 16 16"  >
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>
<div style={{fontSize:'11px',color:'grey',display:"inline-block"}}>FAST FILLING</div>


    </td>
    </tr>

    <tr>
      <td>
        <h6 style={{display:'inline-block',fontSize:'13px',marginLeft:'5px'}}>Cinepolis: Nexus Amritsar</h6>
        <img src="https://in.bmscdn.com/moviemode/cinemaphotoshowcase/info.png " height={15} style={{paddingLeft:'90px'}}></img>
        <div style={{display:'inline-block',fontSize:'12px',paddingLeft:'5px',color:'grey'}}>INFO</div>
       <div>
       <svg xmlns="http://www.w3.org/2000/svg" widt="16" height="16" fill="green" class="bi bi-phone" viewBox="0 0 16 16" style={{marginLeft:'40px'}}>
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
<label style={{paddingLeft:'5px',fontSize:'12px',color:'green',fontWeight:'450'}}>M-Ticket</label>
  

<Card style={{width:'100px',height:'40px',textAlign:'center',paddingTop:'8px',fontSize:'14px',color:"green",display:'inline-block',marginLeft:'210px'}}>
<div onClick={() => setIsOpen((prev) => !prev)} >02:10 PM</div>
{isOpen && (

  <Row>
     <Col xs={12}>
    <Card  style={{ textAlign: "center"}}>
      <Link to="/Gpay" style={{textDecoration:'none',color:"black"}}>
   <div>Rs.190.00</div>
<div className={style.seat} >NORMAL</div>
<div className={style.available}>Available</div>

 
  
<div>Rs.200.00</div>
<div className={style.seat} >EXECUTIVE</div>
<div  className={style.available}>Available</div>




<div>Rs.350.00</div>
<div className={style.seat} >VIP</div>
<div  className={style.available}>Available</div>
</Link>
</Card>
</Col>
</Row>
)}
</Card>

<Card style={{width:'100px',height:'40px',textAlign:'center',paddingTop:'8px',fontSize:'14px',color:"green",display:'inline-block',marginLeft:'20px'}}>
<div onClick={() => setIsOpen((prev) => !prev)}>04:10 PM</div>
{isOpen && (

  <Row>
     <Col xs={12}>
    <Card  style={{ textAlign: "center"}}>
      <Link to="/Gpay" style={{textDecoration:'none',color:"black"}}>
   <div>Rs.170.00</div>
<div className={style.seat} >NORMAL</div>
<div className={style.available}>Available</div>

 
  
<div>Rs.210.00</div>
<div className={style.seat} >EXECUTIVE</div>
<div  className={style.available}>Available</div>




<div>Rs.330.00</div>
<div className={style.seat} >VIP</div>
<div  className={style.available}>Available</div>
</Link>
</Card>
</Col>
</Row>
)}
</Card>
</div >
<div style={{marginTop:'10px'}}>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" fill="orange" class="bi bi-dot" viewBox="0 0 16 16" style={{marginLeft:'310px'}}>
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>
<span style={{fontSize:'11px',color:"grey"}}>Non-cancellable</span>
</div>
</td>
    </tr>
    <tr>
      <td>
      <h6 style={{display:'inline-block',fontSize:'13px',marginLeft:'5px',width:"214px"}}>Movietime: Novelty Mall Lawrence
      Road,Amritsar</h6>
        <img src="https://in.bmscdn.com/moviemode/cinemaphotoshowcase/info.png " height={15} style={{paddingLeft:'25px',marginBottom:'30px'}}></img>
        <div style={{display:'inline-block',fontSize:'12px',paddingLeft:'5px',color:'grey',position:'absolute'}}>INFO</div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" widt="16" height="16" fill="green" class="bi bi-phone" viewBox="0 0 16 16" style={{marginLeft:'40px'}}>
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
<label style={{paddingLeft:'5px',fontSize:'12px',color:'green',fontWeight:'450'}}>M-Ticket</label>
<Card style={{width:'100px',height:'40px',textAlign:'center',paddingTop:'8px',fontSize:'14px',color:"green",display:'inline-block',marginLeft:'210px'}}>
<div onClick={() => setIsOpen((prev) => !prev)} >02:30 PM</div>
{isOpen && (

  <Row>
     <Col xs={12}>
    <Card  style={{ textAlign: "center"}}>
      <Link to="/Gpay" style={{textDecoration:'none',color:"black"}}>
 <div>Rs.140.00</div>
<div className={style.seat} >GOLD</div>
<div  className={style.available}>Available</div>

<div>Rs.140.00</div>
<div className={style.seat} >PLATINUM</div>
<div  className={style.available}>Available</div>
</Link>
</Card>
</Col>
</Row>
)}
</Card>

</div>
<div style={{marginTop:'10px'}}>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" fill="orange" class="bi bi-dot" viewBox="0 0 16 16" style={{marginLeft:'310px'}}>
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>
<span style={{fontSize:'11px',color:"grey"}}>Non-cancellable</span>
</div>

      </td>
    </tr>
</tbody>
</Table>
</Card>
<Footer/>
    </div>
    
   
      )
}

