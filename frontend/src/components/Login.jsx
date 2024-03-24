import React,{useState} from 'react'
import Menu from './Menu';
import Breadcrumb from './Breadcrumb';
import { API_URL } from '../config/config';
import toastr from 'toastr'
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const Navigate=useNavigate();
    const [menu,setMenu]=useState(false);
    const [breadcumb,setBreadcumb]=useState(["Home"])
    const [login,setLogin]=useState({
      email:"",
      password:""
    });

    const MenuSwitch=(data)=>{
      setMenu(data)
    }
    const handleChange=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
    }
    const loginUser=()=>{
      fetch(`${API_URL}/user/login`,{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(login)
      }).then(res=>res.json()).then(res=>{
        if(res.err){

          toastr.warning(`${res.err} `,"Warning",{positionClass:"toast-bottom-right"});
        }else if(res.token){
          localStorage.setItem("user",JSON.stringify(res))
          toastr.success(`Connected with success`,"Success",{positionClass:"toast-bottom-right"});
                    setLogin({
email:"",
password:"",    

          })
          Navigate("/");

        }else{

          console.log(res);
        }
      }).catch(err=>console.log(err));
   
    }
  
  return (
    <>
            <div className={menu?"menu":"hide_menu"}>
              <span onClick={MenuSwitch.bind(this,false)} className="close_menu">
              <ion-icon name="close-outline"></ion-icon>
              </span>
              <br />
              <br />
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
    <Breadcrumb PathPage={breadcumb} ActivePage="Login"/>
    <section className="m-3">
      <div className="container">
        <div className="row">
          <div className="card col-md-6 mx-auto">
            <div className="card-body">
              <div className="card-title">
                <h3>LogIn Form</h3>
              </div>
              <form action="">
                <div className="row col-md mt-2">
                  <labal className="form-label">Email</labal>
                  <input type="text" name="email" value={login.email} onChange={handleChange} id="" className="form-control" />
                </div>
                <div className="row col-md mt-2">
                  <labal className="form-label">Password</labal>
                  <input type="text" name="password" value={login.password} onChange={handleChange} id="" className="form-control" />
                </div>
                <div className="row col-md mt-2">
                  <input type="button" value="Login" onClick={loginUser} className="btn btn-dark" />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login