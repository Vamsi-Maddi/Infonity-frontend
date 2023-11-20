import Axios from 'axios';
import {useEffect,useState} from 'react';
import StudentDisplay from './StudentDisplay';
import StudentNav from './StudentNav';

function Studentcourselist(){

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
                return <StudentDisplay obj = {val} />
        })
    }
    return (
        <div>
            <StudentNav/>

        <h3>Courses List Page</h3>

        <div class="row">
                {ListItems()}
        </div>


        </div>
    )
}
export default Studentcourselist;