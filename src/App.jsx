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


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Content/>}/>
      <Route path="/Head" element={<Head/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Movies" element={<Movies/>}/>
      <Route path='/Inner' element={<Inner/>}/>
      <Route path='/Login'  element={<Login/>}/>
      <Route path='/Bookticket'  element={<Bookticket/>}/>
      <Route path='/Videoplay'  element={<Videoplay/>}/>
      <Route path='/Footer'  element={<Footer/>}/>
      
    </Routes>
    </BrowserRouter>
  </>
  )}
  
