import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { home } from '../Redux/Home/action';

export const Home = () => { 
    const dispatch = useDispatch() ;
    // const [data , usedata] = useState([]) ;

    useEffect(() => {
        dispatch(home()) ;
     },[]) ;
    
   const {loading , homedata , error} = useSelector((state) => state.home) ;
    console.log(homedata)
    return(
        <div>
            <table>
                <thead>
                    <th>Country</th>
                    <th>City</th>
                    <th>Population</th>
                    
                </thead>
            </table>
        </div>
    )
}