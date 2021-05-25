import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'
export const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //Succesfully create email and password
                if (auth) {
                    history.push('/');
                }
            }).catch(error => alert(error.message));
    }
    return (
        <div className='login'>
            <Link to='/'>
                {/* <img src="https://wallpapercave.com/wp/wp7771146.png" className='loginLogo' alt="logo" /> */}
                <img src="https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?resize=600%2C171&ssl=1" className='loginLogo' alt="logo" />
            </Link>
            <div className="loginContainer">
                <h1>Sign-In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='loginSignInButton'>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon Fake Clone <span>Conditions of Use</span> and <span>Privacy Notice</span>. Please see our Privacy Notice, our Cookies Notice and Internet-Based Ads Notice</p>
                <button onClick={register} className='loginRegisterButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}
