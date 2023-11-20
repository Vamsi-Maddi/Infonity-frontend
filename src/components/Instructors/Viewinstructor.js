import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from './Nav';
import Axios from 'axios';
import avatar from './instructor_avatar.jpg';


function Viewinstructor() {
    const userid = useParams();
    const [data, setdata] = useState([]);
    const [toggle, settoggle] = useState(false);

    const [name, setname] = useState("");
    const [useremail, setuseremail] = useState("");
    const [phone, setphone] = useState("");
    useEffect(() => {
        console.log(userid.data)
        Axios.get("https://infonity-server.onrender.com/courseRoute/view-instructor/" + userid.data)
            .then(
                (res) => {
                    if (res.status === 200) {
                        setdata(res.data);
                    }
                }
            )

    }, [toggle])

    const handleclick = () => {
        settoggle(!toggle);
        try {
            setname(data.fullName);
            setuseremail(data.email);
            setphone(data.phone);
        }
        catch {

        }
    }

    return (
        <div>
            <Nav />
            <div class="main">
                <br></br>
                <div class="cards mt-2 h3 p-1 "> <p class=" mx-2"> &#128075; Hello <span class = "text-primary"> {name} </span></p></div>
                
                <center>
                    <button class="btn btn-success mx-auto" onClick={handleclick} style = {{width:"150px"}}> Load Profile</button>
                </center>
                <br></br>
                {/* <center> */}
                <div class="card p-4 shadow col-lg-8 col-sm-12 col-md-6 mx-auto " style={{height: "24rem"}}>
                <div className="card-img-top my-0 profile-image col-lg-8 col-sm-12 col-md-6 mx-auto pb-1">
                        <img src={avatar} alt="profile avatar" style={{height:"100px",width: "auto"}} />
                    </div>
                    < p></p>
                    <p> Name :  {name} </p><hr></hr>
                    <p> Email : {useremail} </p><hr></hr>
                    <p> phone : {phone}</p>
                </div>
                {/* </center> */}
            </div>
        </div>
    )
}
export default Viewinstructor;


// import Nav from '../Instructors/Nav';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Axios from 'axios';
// import logo from './profile.jpg'
// import logo2 from './pbg.avif'
// import './CourseCard.css';

// function Viewcontent() {
//     return (
        
//   );
// }

// export default Viewcontent;