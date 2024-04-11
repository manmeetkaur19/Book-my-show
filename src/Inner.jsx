import React from 'react';
import {  Image,Container } from 'react-bootstrap';
import style from './CSS Module/Movie.module.css';


export default function Inner() {
  return (
  <>
   <div class="bg-image "  className={style.inner}>  
      {/* style={{backgroundImage:"url('https://assets-in.bmscdn.com/discovery-catalog/events/et00368739-wqbvtqnckw-landscape.jpg'" */}
    {/* }}> */}
     
                <Image
            variant="top"
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jatt-nuu-chudail-takri-et00368739-1710413132.jpg"
            alt="Jatt Nuu Chudail Takri"
            style={{ borderRadius: '16px', display:'flex'}}>
      </Image>
      </div>
      </>
  )
}
