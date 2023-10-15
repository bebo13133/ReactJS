import { Navigate } from "react-router-dom"
import { useContext ,useEffect} from "react"
import { UserContext } from "../contexts/UserContext"
export const Logout = ()=>{
const {onLogout} = useContext(UserContext)
useEffect(()=>{
    onLogout()
},[onLogout])


return <Navigate to="/"/>
}