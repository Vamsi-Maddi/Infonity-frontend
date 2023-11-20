import Axios from 'axios';
import { Link } from 'react-router-dom';
import './Displaycourse.css';
function Displaycourse(props) {

    const handledelete = () => {
        Axios.delete("https://infonity-server.onrender.com/courseRoute/delete-course/" + props.obj._id)
            .then((res) => {
                if (res.status === 200) {
                    alert("course deleted successfully");
                    window.location.reload();
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));

    }
    return (

        <div class="col-xlg-4 col-lg-3 col-md-6">

            <div class="card shadow mx-2 my-2">
                <img src={props.obj.Thumbnail} class="card-img-top mx-2" alt="..."></img>
                <div class="card-body">
                    <center>
                        <h5 class="card-title">{props.obj.Name}</h5>
                        <hr></hr>
                        {/* <p class="card-text">{props.obj.Description}<br></br> */}
                        <p>    <b>Author : <span><b>{props.obj.Author}</b></span></b></p>
                        <p>    <b>Duration : <span><b>{props.obj.Duration}</b></span>hrs</b></p>
                        <button class="btn btn-success"><Link to={"/course/" + props.obj._id} className="text-light text-decoration-none">
                            View Content
                        </Link></button>
                        <button class="btn btn-warning mx-2" ><Link to={"/edit-course/" + props.obj._id} class="text-decoration-none text-light" >Edit course</Link></button>
                        <button class="btn btn-danger mx-2 my-3 " onClick={handledelete}>Delete</button>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Displaycourse;