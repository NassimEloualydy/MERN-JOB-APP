import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import SignIn from '../components/SignIn'
const RouteSystem = () => {
  return (
    <Router>
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
        </>
    </Router>
  )
}

export default RouteSystem