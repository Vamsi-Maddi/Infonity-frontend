import React from 'react';
// import { nav } from "react-router-dom";
import {Link} from 'react-router-dom';
import footerlogo from './brandname.png';

function Footer({scrollToSection}) {
  return (
    <div id = "Learn more">
      <footer className=" pt-4  bgcolor text-white">
        <div className="container">
          <div className="row py-3">
            <div className="col-lg-3 col-12 align-left mx-auto">
              <img className="navbar-brand text-primary" src = {footerlogo} style={{height : "70px" , width : "auto"}} ></img>
              <p className=" my-lg-4">
                It's a Learning management System with online examination facility to help teachers and students.
              </p>
              <div className="footer_social_area">
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i className="fa fa-facebook m-2 "></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i className="fa fa-pinterest m-2 "></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i className="fa fa-skype m-2 "></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="fa fa-twitter m-2 "></i></a></div>
             
            </div>
            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h3 className="pb-lg-3  light-300">Quick Links</h3>
              <ul className="list-unstyled  light-300">
                <li className="pb-2">
                  
                  <Link className="text-decoration-none text-light" to="/courses" exact>Courses</Link>
                </li>
                <li className="pb-2">
                  
                  <a className="text-decoration-none text-light" onClick={() => scrollToSection("FAQs")} >FAQ's</a>
                </li>
                <li className="pb-2">
                  
                  <Link className="text-decoration-none text-light " to="/instructor-login" exact>Instructor</Link>
                </li>
                <li className="pb-2">
                  
                  <Link className="text-decoration-none text-light " to="/sign-up" exact>Student</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 my-sm-0 mt-4 ">
              <h3 className="pb-lg-3  light-300">Designers</h3>
              <ul className="list-unstyled light-300">
                <li className="pb-2">
                  
                  <nav className="text-decoration-none " to="/" exact>Maddi Vamsi</nav>
                </li>
                <li className="pb-2">
                  
                  <nav className="text-decoration-none " to="/" exact>Simma Hitesh</nav>
                </li>
                <li className="pb-2">
                  
                  <nav className="text-decoration-none " to="/" exact>Devata Pujitha</nav>
                </li>
                <li className="pb-2">
                  
                  <nav className="text-decoration-none " to="/" exact>Kondeti Raja Manikanta</nav>
                </li>
                <li className="pb-2">
                  
                  <nav className="text-decoration-none " to="/" exact>Yarabothu Avinash</nav>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-2 my-sm-0 mt-4">
              <h3 className="pb-lg-3  ">For Public</h3>
              <ul className="list-unstyled  ">
                <li className="pb-2">
                  <nav className="text-decoration-none " to="/" exact>Terms of use</nav>
                </li>
                <li className="pb-2">
                  
                  <nav className="text-decoration-none " to="/" exact>Privacy Policy</nav>
                </li>
                <li className="pb-2">
                  
                  <nav className="text-decoration-none " to="/contact" exact>Contact</nav>
                </li>
                <li className="pb-2">
                  
                  <a className="text-decoration-none " href="mailto:Infonity@gmail.com">Infonity@gmail.com</a>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-100 bgcolor text-white ">
          <div className="container">
            <div className="row pt-2">
              <div className="col-lg-6 col-sm-12">
                <p className=" text-lg-start light-300 text-center">
                  &copy; Copyright {(new Date().getFullYear())} Infonity All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;