import { useState, useEffect, useRef } from 'react'
import React from 'react'
import Navbar from './components/navbar'
import About from './components/about'

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
    </div>
  )
}

export default App;
