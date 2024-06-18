import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Quote from './components/quote'
import Resturant from './components/resturant'
import Home from './components/Home'
import Contact from './components/contact'

function App() {
  return (
   
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element = {<Home/>}> </Route>
        <Route path='/Quote' element = {<Quote/>}> </Route>
        <Route path='/Resturant' element = {<Resturant/>}> </Route>
        <Route path='/Contact' element = {<Contact/>}> </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App


