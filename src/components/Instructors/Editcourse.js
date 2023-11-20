import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import Nav from './Nav';
function Editcourse(props) {
    const { id } = useParams();
    // displaying the particular course details 
    const [toggle, settoggle] = useState(false);
    const [verify, setverify] = useState(false);
    const handleligbility = () => {
        setverify(!verify);
    }

    const [courseName, setcourseName] = useState("");
    const [Description, setDescription] = useState("");
    const [Duration, setDuration] = useState("");

    const arr = [courseName, Description, Duration];
    useEffect(() => {
        Axios.get("https://infonity-server.onrender.com/courseRoute/update-course/"+ id)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.Author === props.instructorname) {
                        settoggle(true);
                        setcourseName(res.data.Name);
                        setDescription(res.data.Description);
                        setDuration(res.data.Duration);
                    }
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, [verify])
    //collecting the input from the form 
    const [courseLinkname, setcourseLinkname] = useState("");
    const [courseLink, setcourseLink] = useState("");
    const content = [courseLinkname, courseLink];

    const handleAddcontent = (event) => {
        event.preventDefault();
        const updatedLinks = [{ Linkname: content[0], Url: content[1] }];
        Axios.post("https://infonity-server.onrender.com/courseRoute/update-content/" + id, { updatedLinks })
            .then((res) => {
                if (res.status === 200) {
                    alert("content added succesfully");
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    // end of the collection of input
    const handleEdit = (event) => {
        event.preventDefault();
        const data = { Name: arr[0], Description: arr[1], Duration: arr[2]};
        Axios.put("https://infonity-server.onrender.com/courseRoute/update-course/"+ id, data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Details updated successfully");
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <Nav />
            <button class="btn btn-success" onClick={handleligbility}> Check eligibility</button>
            <div> {toggle ? (
                <>
                    <div class="shadow col-lg-6 col-md-6 col-sm-12 my-5 mx-auto">
                    <h1 class = "ms-2"> Add content</h1>
                    <form onSubmit={handleAddcontent}>
                        <input onChange={(event) => setcourseLinkname(event.target.value)} class="form-control my-3 mx-3 " placeholder="Enter Video Name" />
                        <p class = "h3 ms-2" >Add video url</p>
                        <input onChange={(event) => setcourseLink(event.target.value)} class="form-control my-3 mx-3"  placeholder= "Please enter valid url" />
                        <button class="btn btn-success my-3 mx-auto" type="Submit">Submit</button>
                    </form>
                    </div>

                    <div class="row">

                        <div class="shadow col-lg-6 col-md-6 col-sm-12 my-5 mx-auto" style={{ marginBottom: "100%" }}>
                            <h1 class = "ms-1 mb-3 ">Edit Course Details</h1>
                            <form onSubmit={handleEdit}>
                                <h3 class = "ms-1 ">Course Name</h3>
                                <input onChange={(event) => setcourseName(event.target.value)} class="form-control mt-3 mb-3  border-secondary mx-auto" placeholder="Enter the Course Name" value={courseName} />
                                <h3 class = "ms-1">Course Description</h3>
                                <textarea onChange={(event) => setDescription(event.target.value)} type="text-area " class="form-control my-3 border-secondary mx-auto" placeholder="Enter the Course Description " value={Description} />
                                <h3 class = "ms-1">Course Duration</h3>
                                <input onChange={(event) => setDuration(event.target.value)} class="form-control my-3  border-secondary mx-auto" placeholder="Enter the Course Duration in hours(approximate)" value={Duration} />
                                {/* <input onChange={(e) => handlefileupload(e)} class="custom-file-input w-75 rounded border-secondary" type="file" style={{ height: "2rem", alignItems: "left" }} accept='.jpg,.jpeg,.png'></input> */}
                                <br></br>
                                <button class="btn btn-success mb-3 ms-auto" type="Submit">Update Details</button>
                            </form>
                        </div>
                    </div>
                </>
            ) :
                (
                    <h3>verify your eligibility to edit the course</h3>
                )}
            </div>
        </div>
    )
}

export default Editcourse;