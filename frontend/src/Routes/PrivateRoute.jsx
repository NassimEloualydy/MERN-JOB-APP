import React from 'react'
import {Navigate,Outlet} from "react-router-dom"
const isAuthTicate=()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user)
    return user
    return false
}
const PrivateRoute = () => {
  return isAuthTicate() ? <Outlet/>:<Navigate to='/'/>
}

export default PrivateRoute