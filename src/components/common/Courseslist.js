import Axios from 'axios';
import {useEffect,useState} from 'react';
import Displaycourse from './Displaycourse';
import Nav from '../Instructors/Nav';

function Courseslist(){

    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://infonity-server.onrender.com/courseRoute/")
        .then((res)=>{
            if(res.status===200){
                setArr(res.data);
            }
            else {
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])

    const ListItems = ()=>{
        return arr.map((val,ind)=>{
                return <Displaycourse obj = {val} />
        })
    }
    return (
        <div>
            <Nav/>

        <h3>Courses List Page</h3>

        <div class="row">
                {ListItems()}
        </div>


        </div>
    )
}
export default Courseslist;