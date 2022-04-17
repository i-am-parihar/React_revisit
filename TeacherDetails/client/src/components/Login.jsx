import React, { useState } from 'react';
import {useSelector , useDispatch} from "react-redux" ;
import { login } from '../Redux/login/action';
import { Link } from "react-router-dom"
import { Spinner } from 'react-bootstrap';

export const Login = () => { 
    const [email , setEmail] = useState("") ;
    const [password , setPassword] = useState("") ;
    const dispatch = useDispatch()
    
    const handelSubmit = () => {
        const userDetails = {
            email ,
            password ,
        }
        dispatch(login(userDetails)) ;
    }

    const {loading} = useSelector((state)=> state.login);
    if(loading){
        return(     
        <div className='spinner'>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
                Please Wait  
        {<Spinner animation="border" role="status"></Spinner>}    
        </div>
        )
       }
       
    return(
        <div>
            <input
            type="text" 
            placeholder='Enter Email'
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
            />
            <br/>
            <input
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br/>
            <button onClick={handelSubmit}>Submit</button>
            <Link to="/">Home Page</Link>
            <h4>Don't have any account? Click here!</h4>
            <Link to="/registration"><button>Click</button></Link>

        </div>
    )
}