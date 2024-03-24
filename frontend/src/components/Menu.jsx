import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { USER_CONNECTED,API_URL } from '../config/config';
import toastr from 'toastr';
function Menu() {
    const Navigate=useNavigate();
    const [userConnected,setUserConnected]=useState(USER_CONNECTED)
    const NavigateUrl=(url)=>{
      if(url=="/Logout"){

        fetch(`${API_URL}/user/logout`,{
          method:"POST",
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Auhtorization":`Bearer ${USER_CONNECTED.token}`
          }
        }).then(res=>res.json()).then(res=>{
          console.log(res)
          if(res.msg){
              toastr.success(`${res.msg}`,"Success",{positionClass:"toast-bottom-right"});
              localStorage.clear()
              setUserConnected(null)
          }else{
            console.log(res);
          }
        })
        url="/"
      }
      Navigate(url);
    }
  return (
    <>
              {!userConnected?
              (
                <h6 className="fw-bolder">
                  Menu
              </h6>
              
              ):
              (
              <h6 className="fw-bolder">
                  {userConnected.first_name} {userConnected.last_name}
              </h6>

              )}

    <div onClick={NavigateUrl.bind(this,"/")} className="itemMenu">Home</div>
    {!userConnected ? (
    <>      
    <div onClick={NavigateUrl.bind(this,"/SignIn")} className="itemMenu">Sign In</div>
    <div onClick={NavigateUrl.bind(this,"/Login")} className="itemMenu">Login</div>
    </>
    ):(
      <>
      <div onClick={NavigateUrl.bind(this,"/Logout")} className="itemMenu">Log out</div>
      </>
  
    )}
    </>
  )
}

export default Menu