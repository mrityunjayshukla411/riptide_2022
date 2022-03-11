import React from 'react'
import {Link} from "react-router-dom";
import './login.css'
import PrettyPartciles from '../../components/particles';
function Login() {

    return (
        <div>
            <PrettyPartciles/>
            <h1 className='login-heading'>Welcome back!</h1>
            <p className='login-para'>Not a member?<Link to='/register'>Sign up.</Link> </p>
            <input type="email" className="email-login-input" placeholder='email'/>
            <input type="password" className="password-login-input" placeholder='password'/>
            <button type="submit" className="btn-input" value="Submit">Log in</button>

        </div>
    )
}
export default Login;