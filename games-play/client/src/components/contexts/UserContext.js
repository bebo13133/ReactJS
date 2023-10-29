import { createContext,useContext } from "react";
import { userServiceFactory } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
export const UserContext = createContext()

export const UserProvider = ({
    children,
}) => {
    const [isAuth, setAuth] = useLocalStorage('auth',{})
    const navigate = useNavigate()
    const userService = userServiceFactory(isAuth.accessToken)

    const onLoginSubmit = async (data) => {
        try {
            const newUser = await userService.login(data)
            setAuth(newUser)
       
            navigate("/catalog")
        } catch (err) {
            console.log("PROBLEM")
        }
    };

    const onRegisterSubmit = async (data) => {
        const { confirmPassword, ...registerData } = data
        if (registerData.password !== confirmPassword) throw new Error("Please enter valid password")

        try {
            const newUser = await userService.register(registerData)
            console.log(newUser)
            setAuth(newUser)
            navigate("/catalog")
        } catch (err) {
            console.log("PROBLEM")

        }
    }


    const onLogout = async () => {
        await userService.logout()
        setAuth({})
    }


    const contextService = {
        onLoginSubmit,
        userId: isAuth._id,
        userEmail: isAuth.email,
        token: isAuth.accessToken,
        isAuthentication: !!isAuth.accessToken,
        onRegisterSubmit,
        onLogout,
        // onCreateGameSubmit,
        // onDeleteClick
    }



    return (
        <>
            <UserContext.Provider value={contextService}>

                {children}

            </UserContext.Provider>


        </>

    )


}
export const useAuthContext = () => {
    const context = useContext(UserContext);

    return context;
};