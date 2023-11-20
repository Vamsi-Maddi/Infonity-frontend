import React from 'react'
import "./ContactUs.css";
import { useState } from 'react';
import Axios from 'axios';
function ContacUs() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Message, setMessage] = useState("");

    const arr = [Name,Email,Phone,Message];

    const handleSend = (event) => {
        event.preventDefault();
        const data = { Name: arr[0], Email: arr[1], Phone: arr[2],Message: arr[3] };
        Axios.post("https://infonity-server.onrender.com/courseRoute/post-message", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Message Posted Succesfully");
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }
  return (
    <div className="container contact-form" id= "ContactUs">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form onSubmit={handleSend}>
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="txtEmail" className="form-control" placeholder="Your Email *" onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%", height: "150px"}} onChange={(event) => setMessage(event.target.value)}></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
  )
}

export default ContacUs;