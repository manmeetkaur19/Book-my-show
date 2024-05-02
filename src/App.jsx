import React from 'react'
import Head from './Head'
import Movies from './Movies'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Inner from './Inner'
import Login from './Login'
import Signup from './Signup'
import Videoplay from './Videoplay'
import Content from './Content'
import Bookticket from './Bookticket'
import Footer from './Footer'
import Googlepay from './Googlepay'
import Welcome from './Welcome'
import StarRatingApp from './StarRatingApp'
import Privacy from './Privacy'



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/Content" element={<Content/>}/>
      <Route path="/Head" element={<Head/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Movies" element={<Movies/>}/>
      <Route path='/Inner' element={<Inner/>}/>
      <Route path='/Login'  element={<Login/>}/>
      <Route path='/Bookticket'  element={<Bookticket/>}/>
      <Route path='/Videoplay'  element={<Videoplay/>}/>
      <Route path='/Footer'  element={<Footer/>}/>
      <Route path='/Googlepay'  element={<Googlepay/>}/>
      <Route path='/StarRatingApp'  element={<StarRatingApp/>}/>
      <Route path='/Privacy'  element={<Privacy/>}/>
      {/* <Route path='/Aboutus'  element={<Aboutus/>}/> */}


     



      
    </Routes>
    </BrowserRouter>
  </>
  )}
  
