// import { useState } from 'react'
import Signup from './pages/signup'
import Login from './pages/login'
import { Route , Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <>
  <Routes>
  <Route path="/" element = {<Login/>} />
  <Route path="/signup" element = {<Signup/>} />
  <Route path="/dashboard" element = {<Dashboard/>} />

  </Routes>
     
    </>
  )
}

export default App
