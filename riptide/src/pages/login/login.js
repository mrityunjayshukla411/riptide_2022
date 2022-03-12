import React from 'react'
import {Link,Route} from "react-router-dom";
import './login.css'
import PrettyPartciles from '../../components/particles';
function Login() {



    return (
        <div>
            <PrettyPartciles/>
            <h1 className='login-heading'>Welcome back!</h1>
            <p className='login-para'>Not a member? <Link to='/register' className='login-signUp'>Sign up.</Link> </p>
            <input type="email" className="email-login-input" placeholder='Email'/>
            <input type="password" className="password-login-input" placeholder='Password'/>
            <button type="submit" className="btn-input" value="Submit" ><a href='/explore'>Log in</a></button>
            

        </div>
    )
}
export default Login;