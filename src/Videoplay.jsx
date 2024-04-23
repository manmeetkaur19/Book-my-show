import React from 'react'
import ReactPlayer from 'react-player';

export default function Videoplay() {
    const params=new URLSearchParams(window.location.search);
    const link=params.get("id");
    return (
      <>
      <div style={{height:"100vh"}}>
      <ReactPlayer width="100%" height="100%" url={link} />
      </div>
      
    </>
      )
}





