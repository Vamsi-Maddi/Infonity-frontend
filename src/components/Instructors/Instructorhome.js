import Nav from './Nav';
import './Instructorhome.css';
import Logo from './edu2.jpg';
import Logo2 from './best.jpg'

function Instructorhome(props) {
    return (
        <div>
            <Nav instructorid={props.id} instructorname={props.instructorname} />


            <div class="main">
                <h1 class="text-primary mx-3">Instuctor Education Portal</h1>
                <h2  class = "text-warning ms-3">Hello, {props.instructorname}</h2>
                <center>
                    <h5 class="text-light">Welcome to InfoNity</h5>
                    <button class="btn border-light text-light bold  mt-3"><h3>
                        Hello Instuctors <br></br> Engage and Inspire your students</h3></button>
                    <br></br>

                    <div class="courses row ">

                        {/* <div class="col-3"></div>
                        <div class="card  col-3 mx-3 col-sm-6 col-lg-3 col-md-5 " style={{ marginLeft: " 40rem" }}>
                            <img src={Logo} class="card-img-top" alt="Infonity" ></img>
                            <div class="card-body">
                                <p class="card-text">The passport to a brighter future.Once a teacher, always a teacher</p>
                            </div>
                        </div> */}

                        {/* <div class="card col-3 mx-3 py-3 col-sm-6 col-lg-3 col-md-5" >
                            <img src={Logo2} class="card-img-top" alt="Infonity"></img>
                            <div class="card-body">
                                <p class="card-text">
                                    Helping every child fulfil their potential.</p>
                            </div>
                        </div> */}
                         <div class="course col-sm-0 col-md-3"> </div>

                        <div class="course col-sm-6 col-lg-3">
                            <div class="m-1 bg-light ">
                            <img src={Logo} class="card-img-top" alt="Infonity" ></img>
                            <div class="card-body">
                                <p class="pb-4">The passport to a brighter future.Once a teacher, always a teacher</p>
                            </div>
                            </div>
                        </div>
                        <div class="course col-sm-6 col-lg-3 ms-5">
                            <div class="m-1 bg-light ">
                            <img src={Logo2} class="card-img-top" alt="Infonity" ></img>
                            <div class="card-body">
                                <p class="">Helping every child fulfil their potential.Teaching is the one profession that creates all other professions.</p>
                            </div>
                            </div>
                        </div>
                        

                    </div>
                </center>
            </div>
        </div>
    )
}
export default Instructorhome;








