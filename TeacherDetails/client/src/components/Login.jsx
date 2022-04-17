import React, { useState } from 'react';
import {useSelector , useDispatch} from "react-redux" ;
import { login } from '../Redux/login/action';
import { Link } from "react-router-dom"
import { Spinner } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../App.css"

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
        <div className='loginBox'>
             <Box
              component="form"
             sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
             noValidate
             autoComplete="off"
             >
        <div>
            <TextField
            error
            id="outlined-error"
            label="Enter Email"
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
        />
        </div>
        <div>
            <TextField
            error
            id="filled-error"
            label="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        </div>
            </Box> 
            <br/>
            <Button variant="contained" onClick={handelSubmit}>Submit</Button>
            <Link to="/">Home Page</Link>
            <h4>Don't have any account? Click here!</h4>
            <Link to="/registration"><Button variant="contained">Click</Button></Link>

        </div>

    )
}