import { Link } from 'react-router-dom';
import '../common/Displaycourse.css';
function StudentDisplay(props) {

    return (

        <div class="col-xlg-4 col-lg-3 col-md-6">

            <div class="card shadow mx-2 my-2" style={{height : "25rem",width:"20rem"}}>
                <img src={props.obj.Thumbnail} class="card-img-top mx-2" alt="..."></img>
                <div class="card-body">
                    <center>
                        <h5 class="card-title">{props.obj.Name}</h5>
                        <hr></hr>
                        {/* <p class="card-text">{props.obj.Description}<br></br> */}
                        <p > <b> Author :{props.obj.Author}  </b></p>
                        <p>    <b>Duration : <span><b>{props.obj.Duration}</b></span>hrs</b></p>
                        <button class="btn btn-success mx-auto"><Link to={"/student-course/" + props.obj._id} className="text-light text-decoration-none">
                            View Content
                        </Link></button>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default StudentDisplay;