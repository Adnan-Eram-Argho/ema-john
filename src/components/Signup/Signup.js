import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const nevigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value)
    }
    if (user) {
        nevigate('/home')
    }
    const handleCreateUser = e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError("Your two passwords didn't match")
            return
        }
        if (password.length < 6) {
            setError('passwords must be 6 charecter or longer')
            return
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-container'>

            <div >
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleCreateUser}>
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
                    <div className="input-group">
                        <label htmlFor="confirm-password" >
                            Confirm password
                        </label>
                        <input type="password" name="confirm-password" required onBlur={handleConfirmPasswordBlur} />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input type="submit" value="Login" className='form-submit' />
                </form>
                <p>Alreasy have an account <Link to='/login' className='form-link'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;