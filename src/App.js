import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState,useEffect } from 'react';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Createcourse from './components/Instructors/Createcourse'
import Courseslist from './components/common/Courseslist';
import Editcourse from './components/Instructors/Editcourse';
import CombinedPage from './components/student/CombinedPage';
import HomePage from './components/common/HomePage'
import Viewcontent from './components/common/Viewcontent';
import InstructorLogin from './components/Instructors/InstructorLogin';
import Studentcourselist from './components/student/Studentcourselist';
import Studentview from './components/student/studentview';
import Viewuser from './components/student/Viewuser';
import Viewinstructor from './components/Instructors/Viewinstructor';
import Studenthome from './components/student/Studenthome';
import Instructorhome from './components/Instructors/Instructorhome';

function App() {
  const [studentname,setstudentname] = useState("");
  const [instructorname,setinstructorname] = useState("");
  useEffect (() => {
    try {
      const storedId = localStorage.getItem('id');
      const storedId1 = localStorage.getItem('id1')
      if (storedId) {
          setstudentname(JSON.parse(storedId));
        }
      if (storedId1) {
          setinstructorname(JSON.parse(storedId1));
        }
  }
  catch {

  }
  },[])
  const getstudentname = (childdata) => {
    setstudentname(childdata);
    localStorage.setItem('id', JSON.stringify(childdata));
  }
  const getinstructorname = (childdata) => {
    setinstructorname(childdata);
    localStorage.setItem('id1', JSON.stringify(childdata));
  }
  
  return (
    <div className="container">
      {console.log(instructorname)}
        <HashRouter>
          <Routes>
              <Route path = "/" element={<HomePage/>}/>
              <Route path = "/create-course" element = {<Createcourse instructorname = {instructorname[1]}/>} />
              <Route path = "/course-list" element={<Courseslist/>}/>
              <Route path = "/student-course-list" element={<Studentcourselist/>}/>
              <Route path = "/sign-up" element={<CombinedPage getstudentname = {getstudentname}/>}/>
              <Route path = "/edit-course/:id" element = {<Editcourse instructorname = {instructorname[1]}/>}/>
              <Route path = "/course/:id" element = {<Viewcontent/>}/>
              <Route path = "/student-course/:id" element = {<Studentview/>}/>
              <Route path = "/instructor-login" element = {<InstructorLogin getinstructorname = {getinstructorname}/>}/>
              <Route path = "/view-student/:data" element = {<Viewuser/>}></Route>
              <Route path = "/view-instructor/:data" element = {<Viewinstructor instructorname = {instructorname[1]} id = {instructorname[0]}/>}></Route>
              <Route path = "/student-home" element = {<Studenthome username = {studentname[1]} id = {studentname[0]}/>}></Route> 
              <Route path = "/instructor-home" element = {<Instructorhome instructorname = {instructorname[1]} id = {instructorname[0]}/>}></Route> 
              
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
