import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    console.log(user)
    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }
    // if (user) {
    //     navigate(from, { replace: true })

    // }
    const handleUserSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password).then(() => navigate(from, { replace: true }))
    }
    // const handleUserSignIn = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(email, password)
    // }
    return (
        <div className='form-container'>

            <div >
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" required onBlur={handleEmailBlur} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" required onBlur={handlePasswordBlur} />
                    </div>
                    <input type="submit" value="Login" className='form-submit' />
                    <p style={{ color: 'red' }}>{error?.massege}</p>
                    {
                        loading && <p>loading...</p>
                    }
                </form>
                <p>new to ema john? <Link to='/signup' className='form-link'>Create an Acount</Link></p>
            </div>
        </div>
    );
};

export default Login;