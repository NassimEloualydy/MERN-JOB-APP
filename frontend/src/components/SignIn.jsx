import React,{useState} from 'react'
import Menu from './Menu';
import Breadcrumb from './Breadcrumb';
const SignIn = () => {
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
      console.log(login)
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
        <h3 className='fw-bolder'>Sign In Page</h3>
    </div>
    <Breadcrumb PathPage={breadcumb} ActivePage="Sign In"/>
    <section className="m-3">
      <div className="container">
        <div className="row">
          <div className="card col-md-6 mx-auto">
            <div className="card-body">
              <div className="card-title">
                <h3>SignIn Form</h3>
              </div>
              <form action="">
              <div className="row col-md mt-2">
                  <labal className="form-label">First Name</labal>
                  <input type="text" name="first_name" onChange={handleChange} id="" className="form-control" />
                </div>

                <div className="row col-md mt-2">
                  <labal className="form-label">Last Name</labal>
                  <input type="text" name="last_name" onChange={handleChange} id="" className="form-control" />
                </div>
                <div className="row col-md mt-2">
                  <labal className="form-label">Sexe</labal>
                  <select name="sexe" id="" className="form-control">
                  <option value="">Choose Your Sexe</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  </select>
                </div>
                <div className="row col-md mt-2">
                  <labal className="form-label">Phone</labal>
                  <input type="text" name="phone" onChange={handleChange} id="" className="form-control" />
                </div>
                <div className="row col-md mt-2">
                  <labal className="form-label">Date of birth</labal>
                  <input type="text" name="date_of_birth" onChange={handleChange} id="" className="form-control" />
                </div>

                <div className="row col-md mt-2">
                  <labal className="form-label">Email</labal>
                  <input type="text" name="email" onChange={handleChange} id="" className="form-control" />
                </div>
                <div className="row col-md mt-2">
                  <labal className="form-label">Password</labal>
                  <input type="text" name="password" onChange={handleChange} id="" className="form-control" />
                </div>
                <div className="row col-md mt-2">
                  <input type="button" value="Sign In" className="btn btn-dark" />
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

export default SignIn