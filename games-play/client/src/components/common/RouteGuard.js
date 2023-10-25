import { useAuthContext } from "../contexts/UserContext"
import { useContext } from "react"
import { useNavigate, Navigate, Outlet } from "react-router-dom"

export const RouteGuard = () => {
    const { isAuthentication } = useAuthContext()
    // const navigate = useNavigate()
    if (!isAuthentication) return <Navigate to='/login' />
    return(
            <>
            <Outlet/>
            </>
    )


    // 

    // return (
    //     <>
    //         {children}

    //     </>
    // )
}