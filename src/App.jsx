
import Login from './pages/Login'
import { Route , Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/signup'


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
