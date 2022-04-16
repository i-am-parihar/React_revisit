import {useState} from 'react' ;
import {useSelector , useDispatch} from "react-redux" ;
import {setDefault ,signUp } from '../Redux/signUp/action';
import {useNavigate} from "react-router-dom"
import { Spinner } from 'react-bootstrap';
import './SignUp.css';

export const SingUp = () => {
   const [name, setname] = useState("") ;
   const [email, setemail] = useState("") ;
   const [password, setpassword] = useState("") ;
   const [userName, setuserName] = useState("") ;
   const [mobile, setmobile] = useState("") ;
   const [description, setdescription] = useState("") ;
   const navigate = useNavigate() ;
   const dispatch = useDispatch() ;

   const handleSubmit = () => {
     const userDetails = {
        name,
        email,
        password,
        userName,
        mobile,
        description 
     }
     
     dispatch(signUp(userDetails))
   };
   
   const {loading , isRegister , error} = useSelector((state) => state.signUp) ;
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

   if(error){
       alert("Please Check Your username and password") ;
       dispatch(setDefault()) ;
       navigate('/signUp') ;
   }

   if(isRegister){
      alert("Register Successfull") ;
      navigate('/login') ;
   }

    return(
        <div>
            <h2>Sing Up</h2>
            <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setname(e.target.value)} 
            />
            <br/>
            <input
            type="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            />
            <br/>
            <input
            type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            />
            <br/>
            <input
            type="text"
            placeholder='Enter Username'
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            />
            <br/>
            <input
            type="number"
            placeholder='Enter Mobile Number'
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
            />
            <br/>
            <input
            type="text"
            placeholder='Enter Description'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}