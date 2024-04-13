import React from 'react'
import Content from './Content'
import Head from './Head'
import Movies from './Movies'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Inner from './Inner'
import Trailer from './Trailer'
import Login from './Login'
import Signup from './Signup'
import Videoplay from './Videoplay'





export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Content/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Movies" element={<Movies/>}/>
      <Route path="/Head" element={<Head/>}/>
      <Route path='/Inner' element={<Inner/>}/>
      <Route path='/Trailer' element={<Trailer/>}/>
      <Route path='/Login'  element={<Login/>}/>
      <Route path='/Videoplay'  element={<Videoplay/>}/>
    </Routes>
    </BrowserRouter>
  {/* <Content/>
  <Head/>
  <Movies/> */}
 
  </>
  )}
  
