import React,{useState} from 'react'
import Menu from './Menu';

const Login = () => {
    const [menu,setMenu]=useState(false);
    const MenuSwitch=(data)=>{
      setMenu(data)
    }
  
  return (
    <>
            <div className={menu?"menu":"hide_menu"}>
              <span onClick={MenuSwitch.bind(this,false)} className="close_menu">
              <ion-icon name="close-outline"></ion-icon>
              </span>
              <br />
              <br />
            <h6 className="fw-bolder">
              Menu
              </h6>
              <Menu/>
        </div>
        <span className="iconmenu" onClick={MenuSwitch.bind(this,true)}>

    <ion-icon name="menu-outline"></ion-icon>
        </span>

    <div className="headerSearchInfo">
        <br />
        <br />
        <h3 className='fw-bolder'>Login Page</h3>
    </div>
    </>
  )
}

export default Login