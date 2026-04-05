import { useState } from 'react'

import './App.css'


import Header from './components/layout/Header'
import { BrowserRouter } from 'react-router-dom'


// testing header works -- remove if needed :) 
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
   </BrowserRouter>
    </>
  )
}

export default App
