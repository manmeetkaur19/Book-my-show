import React from 'react'
import Content from './Content'
import Head from './Head'
import Movies from './Movies'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Signin from './Signin'
import Movies1 from './Movies1'
import Inner from './Inner'



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Content/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/Movies" element={<Movies/>}/>
      <Route path='/Movies1' element={<Movies1/>}/>
      <Route path="/Head" element={<Head/>}/>
      <Route path='/Inner' element={<Inner/>}/>
    </Routes>
    </BrowserRouter>
  {/* <Content/>
  <Head/>
  <Movies/> */}
 
  </>
  )}
  
