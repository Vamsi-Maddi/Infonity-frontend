import { useState } from 'react';
import Axios from 'axios';
import Nav from './Nav';
import './Createcourse.css';
import { useParams } from 'react-router-dom';

function converttobase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
function Createcourse(props) {
    const [authorname,setauthorname] = useState(props.instructorname);
    const [courseName, setcourseName] = useState("");
    const [Description, setDescription] = useState("");
    const [Duration, setDuration] = useState("");
    const [Thumbnail, setThumbnail] = useState("");

    const arr = [courseName, Description, Duration, authorname, Thumbnail];
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { Name: arr[0], Description: arr[1], Duration: arr[2], Author : arr[3], Thumbnail: arr[4] };
        Axios.post("https://infonity-server.onrender.com/courseRoute/create-course", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Course Added Succesfully");
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    const handlefileupload = async (e) => {
        const file = e.target.files[0];
        const base64 = await converttobase64(file);
        setThumbnail(base64);

    }
    return (
        <div>
            <Nav />
            <div class="main">
                <h1 class=" text text-center  mt-5 text-dark"> Create course page</h1>
                <center>
                    <div class="card shadow col-lg-6 col-md-7 col-sm-12 my-5" style={{ marginBottom: "100%" }}>
                        <form onSubmit={handleSubmit}>
                            <input onChange={(event) => setcourseName(event.target.value)} class="form-control mt-5 my-3 w-75 border-secondary" placeholder="Enter the Course Name" />
                            <textarea onChange={(event) => setDescription(event.target.value)} type="text-area " class="form-control my-3 w-75 border-secondary" placeholder="Enter the Course Description " />
                            <input onChange={(event) => setDuration(event.target.value)} class="form-control my-3 w-75 border-secondary" placeholder="Enter the Course Duration in hours(approximate)" />
                            <input onChange={(e) => handlefileupload(e)} class="custom-file-input w-75 rounded border-secondary" type="file" style={{ height: "2rem", alignItems: "left" }} accept='.jpg,.jpeg,.png'></input>
                            <br></br>
                            <button class="btn btn-success my-4 " style={{ width: "15rem", }} type="Submit">Submit</button>
                        </form>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Createcourse;



