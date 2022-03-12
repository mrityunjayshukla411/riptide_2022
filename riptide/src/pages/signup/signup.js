import React from 'react'
import {Link} from "react-router-dom";
import './signup.css'
import PrettyPartciles from '../../components/particles';
function Signup() {

    return (
        <div>
            <PrettyPartciles/>
            <h1 className='signup-heading'>Create new account</h1>
            <p className='signup-para'>Already a member?<Link to='/login'>Login in</Link> </p>
            <p className='signup-para2'>Are you a student or a university?</p>
            <input type="radio" id="html" name="fav_language" value="HTML" className='radio-btn1'/>
            <label for="html" className='radio-l1'>University</label><br/>
            <input type="radio" id="css" name="fav_language" value="CSS" className='radio-btn2'/>
            <label for="html" className='radio-l2'>Student</label><br/>
            <input type="text" className="name-input" placeholder='Student/ University Name'/>
            <label className='email-text'>Email</label>
            <input type="email" className="email-input" placeholder='email'/>
            <input type="password" className="password-input" placeholder='password'/>
            <button type="submit" className="btn-input" value="Submit"><a href='/explore'>Create Account</a></button>
        </div>
    )
}
export default Signup;