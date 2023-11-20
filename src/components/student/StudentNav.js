import { Link } from 'react-router-dom';
import "../student/StudentNav.css";
import logo from '../common/brand-logo.png';

function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                <img className="navbar-brand"  style = {{height : "70px",width : "auto"}}src = {logo}></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto float-right">
                            <li className="nav-item m-2">
                                <Link className="nav-link active hov" to="/student-course-list">Course List</Link>
                            </li>
                            <li className="nav-item m-2">
                                <Link className="nav-link active hov" to= {"/view-student/"+ props.id} >View Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}
export default Nav;