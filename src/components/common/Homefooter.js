import React from 'react';
// import { nav } from "react-router-dom";

function Homefooter() {
  return (
    <div>
      <footer className="bg-dark pt-4">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-3 col-12 align-left">
              <nav className="navbar-brand" to="/" exact>
                <i className='bi-building text-success'></i>
                <span className="text-white">L</span>
                <span className="text-primary">E</span>
                <span className="text-white">M</span>
                <span className="text-primary">N</span>
                <span className="text-primary">O</span>
                <span className="text-white">S</span>
              </nav>
              <p className="text-light my-lg-4 my-2">
                It's a Learning management System with online examination facility to help teachers and students.
              </p>
              <ul className="list-inline footer-icons light-300">
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="http://facebook.com/">
                    <i className='bi-facebook'></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                    <i className='bi-linkedin'></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="https://www.github.com/">
                    <i className='bi-github'></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="https://www.twitter.com/">
                    <i className='bi-twitter'></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                    <i className='bi-instagram'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h3 className="pb-lg-3 text-light light-300">Quick Links</h3>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/courses" exact>Courses</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/tests" exact>Tests</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/teacher_login" exact>Teacher</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/student_login" exact>Student</nav>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h3 className="pb-lg-3 text-light light-300">Latest Courses</h3>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/" exact>Office Automation</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/" exact>Web Development</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/" exact>Data Analysis</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/" exact>Digital Marketing</nav>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h3 className="pb-lg-3 text-light light-300">For Public</h3>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/" exact>Terms of use</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/" exact>Privacy Policy</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <nav className="text-decoration-none text-light" to="/contact" exact>Contact</nav>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <a className="text-decoration-none text-light" href="mailto:0n3.a77@gmail.com">0n3.a77@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-100 bg-primary py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-start text-center text-light light-300">
                  &copy; Copyright {(new Date().getFullYear())} One.all Company. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-end text-center text-light light-300">
                  Designed by <a rel="noreferrer" className="text-decoration-none text-light" href="https://www.onedotall.in" target="_blank"><strong>One.all</strong></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homefooter;