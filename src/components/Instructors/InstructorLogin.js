// import {useState} from 'react';
// import Axios from 'axios';
// import { useNavigate } from "react-router-dom";
// function InstructorLogin(props) {
//     const [loginEmail, setLoginEmail] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');
//     const navigate = useNavigate();
//     const handleLogin = (e) => {
//         e.preventDefault();
//         const logindata = {email: loginEmail, password: loginPassword };
//         Axios.post("http://localhost:4000/courseRoute/instructor-login", logindata)
//             .then((res) => {
//                 if (res.status === 200) {
//                     alert("Login succesful");
//                     props.getinstructorname([res.data[0],res.data[1]]);
//                     navigate('/instructor-home')
//                 }
//                 else {
//                     Promise.reject();
//                 }
//             })
//             .catch((err) => alert(err));
//     };
//     return (
//         <div> 
//             <form onSubmit={handleLogin}>
//                 <div className="form-group">
//                     <label htmlFor="loginEmail" className="form-label">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         id="loginEmail"
//                         value={loginEmail}
//                         onChange={(e) => setLoginEmail(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="loginPassword" className="form-label">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="loginPassword"
//                         value={loginPassword}
//                         onChange={(e) => setLoginPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Login
//                 </button>
//             </form> 

//         </div>
//     )
// }
// export default InstructorLogin;


import { useState } from 'react';
import Axios from 'axios';
import instructorlogin from './instructorlogin.png'; 
import './Instructorlogin.css';
import { useNavigate } from "react-router-dom"; 

function InstructorLogin() {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [logedin, setlogedin] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const logindata = { username: loginUsername, email: loginEmail, password: loginPassword };
        Axios.post("https://infonity-server.onrender.com/courseRoute/instructor-login", logindata)
            .then((res) => {
                if (res.status === 200) {
                    alert("Login successful");
                    setlogedin(true);
                    navigate('/instructor-home');
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="container-fluid new-forms-class bg-light min-vh-100 d-flex">
            <div className="row p-4 animated fadeInUp">
                <div className="card-image col-md-6 col-sm-12">
                    <img
                        src={instructorlogin}
                        alt="instructor's login picture"
                        className="img-fluid rounded"
                    />
                </div>
                <div className="card-body text-center col-md-6">
                    <h2 className="mb-4">Instructor Login</h2>
                    
                        <form onSubmit={handleLogin} className="w-90 mx-auto">
                            <div className="my-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="loginEmail"
                                    placeholder="Email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="loginPassword"
                                    placeholder="Password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Login
                            </button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default InstructorLogin;