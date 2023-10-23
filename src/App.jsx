import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'


function App({buttonValue}) {


  return (
    <>
      <Nav buttonValue = {buttonValue}/>
    </>
  )
}

export default App
