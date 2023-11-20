// import React from 'react'
// import "./HomeNav.css"
// function HomeNav() {

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <h2 className="navbar-brand">InfoNity <span class = "text-warning display-6">∞</span></h2>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">


//                 <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
//                     <li className="nav-item">
//                         <a className="nav-link active m-2 hov" aria-current="page" href="#">Courses</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link active m-2 hov" href="#">Features</a>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link active m-2 hov" href="#">Pricing</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link active m-2 hov" href="#">Contact</a>
//                     </li>
//                     <button type="button" className="btn btn-dark btn-rounded m-2">Learn More</button>
//                 </ul>
//             </div>



//         </nav>
//     )
// }

// export default HomeNav;

import React from 'react';
import logo from './brand-logo.png';
import "./HomeNav.css";


function HomeNav({scrollToSection}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bgcol px-5">
    <img className="navbar-brand"  style = {{height : "70px",width : "auto"}}src = {logo}></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse justify-content-center 
  " id="navbarCenteredExample">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        
        <li className="nav-item">
        <a className="nav-link active m-2 hov" onClick={() => scrollToSection("Feautures")}>Features</a>
        </li>
        
        <li className="nav-item">
        <a className="nav-link active m-2 hov" onClick={() => scrollToSection("FAQs")} >FAQ's</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active m-2 hov" onClick={()=>scrollToSection("ContactUs")} >Contact</a>
        </li>
        <a type="button" className="btn btn-dark btn-rounded m-2" onClick={()=>scrollToSection("Learn more")}>Learn More</a>
        </ul>  
    </div>
</nav>
    </>
  )
}

export default HomeNav;