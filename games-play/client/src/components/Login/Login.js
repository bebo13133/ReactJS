import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useForm } from '../../Hooks/useForm'


export const Login = ({

}) => {


    const { onLoginSubmit } = useContext(UserContext)
    const { values, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit)

    return (

        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" value={values.email} onChange={onChangeHandler} />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" value={values.password} onChange={onChangeHandler} />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to={"/register"}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )

}