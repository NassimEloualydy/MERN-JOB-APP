import React, { useState } from 'react'
import Menu from './Menu';
function Home() {
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
              <Menu/>
        </div>
        <span className="iconmenu" onClick={MenuSwitch.bind(this,true)}>

    <ion-icon name="menu-outline"></ion-icon>
        </span>
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-indicators">
            
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div  className="carousel-inner text-white">

          <div  className="carousel-item scrolTextContainer active pt-5">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
             <h1 className="display-4 fw-bolder titleDaisy">Sigma Shop</h1>
             <p className="lead titleDaisyLead">
                Explore our diverse collection of trendy apparel at our supermarket clothing section. Discover the latest fashion trends, quality fabrics, and affordable prices for a stylish shopping experience.                
                </p>
                </div>
          <div  className="carousel-item scrolTextContainer pt-5">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 className="display-4 fw-bolder titleDaisy">Sigma Shop</h1>
            <p className="lead titleDaisyLead">
                Elevate your wardrobe with our curated selection of fashionable clothing at the supermarket shop. From casual wear to elegant ensembles, find the perfect style to suit every occasion.             
            </p>
            </div>
          <div  className="carousel-item scrolTextContainer pt-5">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 className="display-4 fw-bolder titleDaisy">Sigma Shop</h1>
              <p className="lead titleDaisyLead">
                Shop with ease at our supermarket clothing department, where fashion meets convenience. Uncover a variety of styles and sizes, ensuring everyone can find their perfect fit for any season.               
            </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
rkkt
    </>
  )
}

export default Home