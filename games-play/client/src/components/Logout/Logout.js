import { Navigate } from "react-router-dom"
import { useContext ,useEffect} from "react"
import { UserContext } from "../contexts/UserContext"
export const Logout = ()=>{
const {onLogout} = useContext(UserContext)
useEffect(()=>{
    onLogout()
    localStorage.clear()
},[onLogout])


return <Navigate to="/"/>
}