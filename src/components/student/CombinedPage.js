import React, { useState } from 'react';
import './CombinedPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import signup from "./signup.png";
import Axios from 'axios';
import Studenthome from '../student/Studenthome';
import { useNavigate } from 'react-router-dom';
const CombinedPage = (props) => {
  
  const [isSignup, setIsSignup] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [logedin,setlogedin] = useState(false);
  

  const [resetMobile, setResetMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSwitch = () => {
    setIsSignup((prev) => !prev);
    setIsForgotPassword(false);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleSendOtp = async () => {
    try {
      // Send request to server to send OTP to the mobile number
      const response = await fetch('https://infonity-server.onrender.com/courseRoute/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: resetMobile,
        }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert('OTP sent to your mobile number. Check your messages.');
      } else {
        alert(`Error sending OTP: ${result.message}`);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Internal Server Error');
    }
  };  

  const handleResetPassword = async () => {
    try {
      // Send request to server to verify OTP and reset password
      const response = await fetch('https://infonity-server.onrender.com/courseRoute/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: resetMobile,
          otp,
          newPassword,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Password reset successful. You can now login with your new password.');
        // Redirect to login page or perform other actions
      } else {
        alert('Error resetting password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Internal Server Error');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== retypePassword) {
      alert('Passwords do not match');
      return;
    }
    const signupdata = { fullName, email, phone, password };
    Axios.post("https://infonity-server.onrender.com/courseRoute/signup", signupdata)
      .then((res) => {
        if (res.status === 200) {
          alert("New user added Successfully");
        }
        else {
          // Promise.reject();
          alert("User exists with the given email or error in creating the user")
        }
      })
      .catch((err) => alert(err));
  };

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const logindata = {email: loginEmail, password: loginPassword };
    Axios.post("https://infonity-server.onrender.com/courseRoute/login", logindata)
      .then((res) => {
        if (res.status === 200) {
          alert("Login succesful");
          props.getstudentname(res.data);
          navigate('/student-home')
        }
        else {
          // Promise.reject();
          alert("failed to login");
        }
      })
      .catch((err) => alert(err));
  };




  return (
  <div> 
    {/* {!logedin ? ( */}
    <div className=" new-forms-class container-fluid bg-light min-vh-100 d-flex">
      <div className="row p-4">
        <div className="card-image col-md-6 col-sm-12">
          <img
            src={signup} // replace with the actual path or URL
            alt="Signup Image"
            className="img-fluid h-100"
          />
        </div>
        <div className=" login-card-body card-body text-center flex-grow-1 col-md-6 col-sm-12">
          <h2 className="mb-4">{isSignup ? 'Create Your Account' : isForgotPassword ? 'Reset Password' : 'Login to Your Account'}</h2>
          {isForgotPassword ? (
            <form>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"
                  value={resetMobile}
                  onChange={(e) => setResetMobile(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button type="button" className="btn btn-link" onClick={handleSendOtp}>
                  Send OTP
                </button>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-primary w-100" onClick={handleResetPassword}>
                Reset Password
              </button>
            </form>
          ) : isSignup ? (
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype Password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
          ) : (
            <div class = "login-card-body card-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
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
          )}
          <div className="mt-4">
            <button className="btn btn-link" onClick={handleSwitch}>
              {isSignup ? 'Already have an account? Login' : isForgotPassword ? 'Back to Login' : "Don't have an account? Sign Up"}
            </button>
            {!isForgotPassword && (
              <button className="btn btn-link" onClick={handleForgotPassword}>
                Forgot Password?
              </button>
            )}
          </div>
        </div>
      </div>
    </div> 
    {/* // ) 
    // : ( 
    //   <Studenthome/>
    // )} */}
    </div>
  );
};

export default CombinedPage;
