import React, { useState } from 'react';
import { useAuthState, } from 'react-firebase-hooks/auth';

import auth from '../firebase.init';
import './Shipment.css'
const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');



    const handleNameBlur = (e) => {
        setName(e.target.value)
    }
    const handleAddressBlur = (e) => {
        setAddress(e.target.value)
    }
    const handlePhoneBlur = (e) => {
        setPhone(e.target.value)
    }

    const handleCreateUser = e => {
        e.preventDefault()
        const shipping = { name, email, address, phone, }
        console.log(shipping)

    }
    return (
        <div className='form-container'>

            <div >
                <h2 className='form-title'>Login</h2>
                <div className="input-group">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="email" name="name" required onBlur={handleNameBlur} />
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" required value={user?.email} readOnly />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">
                            Address
                        </label>
                        <input type="text" name="address" required onBlur={handleAddressBlur} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone" >
                            Phone Number
                        </label>
                        <input type="text" name="phone" required onBlur={handlePhoneBlur} />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input type="submit" value="Add Shipping info" className='form-submit' />
                </form>

            </div>
        </div>
    );
};

export default Shipment;