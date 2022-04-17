import React, { useEffect } from 'react';
import {useSelector , useDispatch } from "react-redux" ;
import {Link, Navigate} from "react-router-dom"
import { classData, fetchdata } from '../Redux/Home/action';


export const Home = () => { 
    const {isAuthenticated} = useSelector((state) => state.login)
    const dispatch = useDispatch() ;
    const {data} = useSelector((state) => state.teacherData) 
    // console.log(data[0].class.length)

    const getData = () => {
     dispatch(fetchdata()) ;
    }
    React.useEffect(() => {
        getData() ;
    },[])
    
    const handelChange = (e) => {
        dispatch(classData(e.class)) ;
        console.log(e.class)
    }
 
    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }
    
    return(
        <div>
           <h1> Home</h1>
           <table>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Gender</th>
                       <th>Age</th>
                       <th>Classes</th>
                   </tr>
                   { data.map((e,id) => {
                           return(
                               <tr>
                                 <Link to="/details"><td onClick={() => {handelChange(e)}}>{e.name}</td></Link>
                                 <td>{e.gender}</td>
                                 <td>{e.age}</td>
                                 <td>{e.class.length}</td>                         
                               </tr>
                           )
                       })
                   }
               </thead>
           </table>
        </div>
    )
}