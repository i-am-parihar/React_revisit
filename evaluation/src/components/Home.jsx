import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { home, home_failure, home_loading, home_success } from '../Redux/Home/action';
import { Link } from "react-router-dom"
import axios from 'axios' ;
import { Spinner } from 'react-bootstrap';

export const Home = () => { 
    const dispatch = useDispatch() ;
    const [data , setdata] = useState([]) ;
    const [country , setcountry]  = useState("") ;

    useEffect(() => {
        dispatch(home_loading()) ;
        axios.get('http://localhost:8081/city')
        .then((res) => dispatch(setdata(res.data))) 
        .catch((err) => dispatch(home_failure())) ;
     },[]) ;

     const handlSearch= (e)=>{
         axios.get(`http://localhost:8081/city?q=${country}`)
        .then((res)=> setdata(res.data))
        .catch((err) => console.log(err))
        }
    
   const {loading , homedata , error} = useSelector((state) => state.home) ;
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
            <h1>Welcome!</h1>
           <div>
           <Link to="/add-country"><button>Add Country</button></Link>
           <Link to="/add-city"><button>Add City</button></Link>
           </div>
           <div>
           <form onSubmit={handlSearch}>
             <input type="text" 
             placeholder='Search Your City'
             value={country} 
             onChange={(e) => setcountry(e.target.value)} />
             <button type='submit'>Search</button>
          </form>
           </div>
            <table>
                <thead>
                     <tr>
                      <th>Country</th>
                      <th>City</th>
                      <th>Population</th>
                      <th>Edit</th>
                      <th>Delete</th>
                     </tr>
                    
                      {data.map((e,id) => {
                      return(
                          <tr>
                              <td>{e.countryName}</td>  
                              <td>{e.city}</td>
                              <td>{e.population}</td> 
                              <td>Edit</td>
                              <td>Delete</td>     
                           </tr>
                      )
                      })}
                   
                    
                </thead>
            </table>
        </div>
    )
}