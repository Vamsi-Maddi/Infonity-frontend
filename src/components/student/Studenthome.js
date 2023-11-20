import StudentNav from './StudentNav';
import './Studenthome.css';

function Studenthome(props) {
    return (
        <div>
            <StudentNav username={props.username} id={props.id} />
            <div class="homediv">
            <h1 class = "ms-5 pt-3">Student Education Portal</h1>
            <h2 class = "ms-5"> Hi, {props.username}</h2>
                <div class="courses container row ">
                    <div class="course col-sm-6 col-lg-3">
                        <div class = "m-1 bg-warning">
                        <h2 class="pt-3">TRENDING COURSES</h2>
                        <p>Your chace to be a trending expert in IT industries and make a successful career after completion of our courses.</p>
                        </div>
                    </div>

                    <div class="course  col-sm-6 col-lg-3">
                    <div class = "m-1 bg-secondary pb-2">
                        <h2 class="pt-3">BOOKS & LIBRARY</h2>
                        <p>Masterstudy is one of the worlds buisiest public library systems, with over 10 million books, movies and other items to borrow.</p>
                        </div>
                    </div>

                    <div class="course col-sm-6 col-lg-3">
                    <div class = "m-1 bg-warning">
                        <h2 class="pt-3">CERTIFIED TEACHERS</h2>
                        <p>Get proffesional education and reliable consuitaion by our team of certified teachers and Instructors.</p>
                        </div>
                    </div>

                    <div class="course col-sm-6 col-lg-3">
                    <div class = "m-1 bg-secondary pb-3">
                        <h2 class="pt-3">CERTIFICATION</h2>
                        <p>Upon successful completion recieve a certificate showing your achievements for completing on our rigorous classes.</p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}
export default Studenthome;