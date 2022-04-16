import {useSelector } from "react-redux" ;
import {Navigate} from "react-router-dom"


export const GetRes = () => {
    const { isAuthenticated } = useSelector((state) => state.login) ;

    if(!isAuthenticated){
       return <Navigate to="/login"/>
    }

    return(
        <div>
            GetRes
        </div>
    )
}