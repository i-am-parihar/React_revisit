import React, { useState } from 'react';
import {useSelector , useDispatch} from "react-redux" ;
import { Link } from 'react-router-dom';
import { register } from '../Redux/Registration/action';
import { Spinner } from 'react-bootstrap';

export const Registration = () => { 
  const [name , setName] = useState("") ;
  const [email , setEmail] = useState("") ;
  const [password , setPassword] =useState("") ;
  const dispatch = useDispatch() ;

  const handleSubmit = () => {
      const userDetails = {
          name,
          email,
          password,
      }
      dispatch(register(userDetails)) ;
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
            <h2>Sing Up!</h2>
            <input
            type="text"
            placeholder="Enter Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
            type="email"
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
            type="password"
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit}>Submit</button><br/>
            <Link to="/login">Go to Login Page!</Link>
        </div>
    )
}