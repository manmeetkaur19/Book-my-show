import React from 'react'
import style from './CSS Module/Ticket.module.css';
import {  Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';






export default function Footer() {
  
  return (
    <>
                  <div className={style.footer}>
                    <Link to="/Content">
                      <center>
                    <Image  height="50px" widht="40px" alt="bookmyshow" src="https://in.bmscdn.com/webin/common/icons/logo.svg"></Image>
                    </center>
                    </Link>
                   <Row style={{marginTop:'25px',marginLeft:'43%'}}>
                    <Col xs={5}>
                  <a href="https://www.youtube.com/user/BookMyShow/featured" >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" fill="white" style={{height:'30px',width:"30px"}}>
    <path d="M43.6 57.7c5.3-2.7 10.5-5.4 15.7-8.2-5.3-2.8-10.5-5.5-15.7-8.2v16.4z"></path>
    <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm23.9 59.2c-.6 2.6-2.8 4.6-5.4 4.9-6.1.7-12.4.7-18.5.7-6.2 0-12.4 0-18.5-.7-2.6-.3-4.7-2.2-5.4-4.9-.9-3.8-.9-7.8-.9-11.7s0-8 .9-11.7c.6-2.6 2.8-4.6 5.4-4.9 6.1-.7 12.4-.7 18.5-.7 6.2 0 12.4 0 18.5.7 2.6.3 4.7 2.2 5.4 4.9.9 3.8.9 7.8.9 11.7s0 8-.9 11.7z"></path>
    </svg>
    </a>
    <a href="https://www.pinterest.com/bookmyshow/" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" fill="white" style={{height:'30px',width:"30px",marginLeft:"10px"}}>
      <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm4.9 58.1c-2.9 0-5.7-1.6-6.7-3.4l-1.9 7.5c-1.2 4.3-4.7 8.6-4.9 8.9-.2.2-.6.2-.7-.2-.1-.6-1-6 .1-10.4.5-2.2 3.5-14.9 3.5-14.9s-.9-1.7-.9-4.3c0-4 2.3-7.1 5.3-7.1 2.5 0 3.7 1.9 3.7 4.1 0 2.5-1.6 6.2-2.4 9.7-.7 2.9 1.4 5.3 4.3 5.3 5.2 0 8.6-6.6 8.6-14.5 0-6-4-10.5-11.3-10.5-8.3 0-13.4 6.2-13.4 13.1 0 2.4.7 4.1 1.8 5.3.5.6.6.8.4 1.5-.1.5-.4 1.7-.6 2.2-.2.7-.7.9-1.4.7-3.8-1.5-5.6-5.7-5.6-10.4 0-7.7 6.5-17 19.5-17 10.4 0 17.3 7.5 17.3 15.6 0 10.8-5.9 18.8-14.7 18.8z"></path>
    </svg></a>
    <a href="https://twitter.com/BookMyShow/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 98 98" fill="white" style={{height:'30px',width:"30px",marginLeft:'10px'}}>
        <path d="M58.7145 66.4634L48.4787 52.2823L51.9131 48.6281L64.7865 66.4634H58.7145Z"></path>
        <path d="M39.4752 31.396L49.0656 44.6831L45.6362 48.3442L33.4032 31.396H39.4752Z"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M49 96.5C75.2335 96.5 96.5 75.2335 96.5 49C96.5 22.7665 75.2335 1.5 49 1.5C22.7665 1.5 1.5 22.7665 1.5 49C1.5 75.2335 22.7665 96.5 49 96.5ZM56.2341 71.3042L45.1181 55.8582L30.601 71.3046H24.1289L42.2851 51.9217L24.1297 26.6943L41.9755 26.6948L52.3388 41.1888L65.9154 26.695L72.5268 26.6948L55.1758 45.1565L73.8715 71.3042H56.2341Z"></path>
    </svg></a>
    <a href="https://www.linkedin.com/company/bookmyshow/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" fill="white" style={{height:'30px',width:"30px",marginLeft:'10px'}}>
        <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm-7.8 63.9h-8.6V36.3h8.6v30.1zm-4-32c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm34.1 32h-8.6V47.8c0-2.2-.6-3.7-3.3-3.7-4.4 0-5.3 3.7-5.3 3.7v18.6h-8.6V36.3h8.6v2.9c1.2-.9 4.3-2.9 8.6-2.9 2.8 0 8.6 1.7 8.6 11.7v18.4z"></path>
    </svg></a>
    </Col>
    </Row>
    <Row>
    <Col>
    <div className={style.ftext} >Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</div>
    <div style={{fontSize: "11px",color: "rgb(102, 102, 102)",marginLeft:"5%",marginRight:"5%",lineHeight:'20px'}}>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist 
   <center>
    shall be implied. Unauthorized use is prohibited and punishable by law.
    </center>
    </div>
    
    </Col>
    </Row>
    

</div>

              
                  </>     
  )
}
