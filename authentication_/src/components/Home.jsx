import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <div className="home">
           <h1>Welcome !</h1>
           <Link to="/login"><button>Login</button></Link>
           <Link to="/signUp"><button>SignUp</button></Link>
           <Link to="/getResturant"><h2>Find Resturant Here</h2></Link>
        </div>
    )
}