import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export const Header = () => {

    const {isAuthentication, userEmail} = useContext(UserContext)
    return (

        <header>
        {/* <!-- Navigation --> */}
        <h1><Link to={"/"} >GamesPlay</Link></h1>
        <nav>
            <Link to="/catalog">All games</Link>
            {/* <!-- Logged-in users --> */}
            {isAuthentication &&   <div id="user">
                <Link to={"/create"}>Create Game</Link>
                <Link to={"/logout"}>Logout</Link>
                <span style={{color:"white", padding: "20px"}}>Welcome: {userEmail}</span>

            </div>}
          
            {!isAuthentication && <div id="guest">
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
            </div>}
            
        </nav>
    </header>
        
       
    )
}