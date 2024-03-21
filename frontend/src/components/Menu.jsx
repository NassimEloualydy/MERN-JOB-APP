import React from 'react'
import { useNavigate } from 'react-router-dom'
function Menu() {
    const Navigate=useNavigate();
    const NavigateUrl=(url)=>{
      Navigate(url);
    }
  return (
    <>
    <div onClick={NavigateUrl.bind(this,"/")} className="itemMenu">Home</div>
    <div onClick={NavigateUrl.bind(this,"/SignIn")} className="itemMenu">Sign In</div>
    <div onClick={NavigateUrl.bind(this,"/Login")} className="itemMenu">Login</div>
    </>
  )
}

export default Menu