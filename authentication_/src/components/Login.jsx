import { useState } from "react"
import {useSelector , useDispatch} from "react-redux" ;
import { Spinner } from 'react-bootstrap';
import { login ,reseat } from "../Redux/login/action";
import {useNavigate} from "react-router-dom"
import './SignUp.css';
import './Login.css' ;

export const Login = () => {
    const [username , setUsername]  = useState("") ;
    const [password , setPassword] = useState("") ;
    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;

    const handleSubmit = () => {
        const userDetails = {
            username ,
            password ,
        }
    
        dispatch(login(userDetails)) ;
    };

    const {loading , isAuthenticated , error} = useSelector((state) => state.login) ;
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
    if(isAuthenticated){
        alert("Login Successfull") ;
        navigate('/getResturant') ;
    }
    if(error){
        alert("Incorrect username or password") ;
        dispatch(reseat()) ;
        navigate('/signUp') ;
    }

    return(
        <div className="main">
            <h2>Login</h2>
            <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
           <br/>
           <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}