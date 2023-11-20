import React from 'react'
import "./Cards.css"
import {Link} from 'react-router-dom';

function Card() {
  return (
    <>
    <div className="how-section1">   
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Unlock Your Learning Potential with Infonity</h5>
                            <p>Welcome to Infonity, where education meets innovation! At Infonity, we understand that every student's journey is unique. That's why we offer a diverse range of courses designed to ignite your curiosity and empower your learning experience. Join a community of passionate learners, engage with expert instructors, and embark on a transformative educational adventure. Infonity is not just a portal, it's your gateway to knowledge, growth, and success. Start your journey with us and unlock the possibilities of a brighter future.</p>
                                        <button type="button" className="btn btn-dark btn-rounded m-2"><Link to = '/sign-up' class = "text-decoration-none text-light">Login/Signup as Student</Link></button>
                        
                        </div>
                        <div className="col-md-6 how-img">
                            <img src="img4.svg" className="rounded img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 how-img">
                             <img src="img3.svg" className="rounded img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h5 class = "text-warning">Empower Your Teaching Journey with Infonity</h5>
                            <p>At Infonity, we recognize the vital role that instructors play in shaping the educational landscape. Join our community of dedicated educators who are passionate about inspiring the next generation. As an Infonity instructor, you have the opportunity to share your expertise with a diverse audience, foster meaningful connections with students, and contribute to a collaborative learning environment. Our platform empowers you with innovative tools and resources to create engaging courses and make a lasting impact. Elevate your teaching journey with us and become a catalyst for positive change in the lives of learners worldwide</p>
                            <button type="button" className="btn btn-dark btn-rounded m-2"><Link to='/instructor-login' class = "text-decoration-none text-light">Login as Instructor</Link></button>
                        </div>
                    </div>
                </div>
                
    </>
  )
}

export default Card;