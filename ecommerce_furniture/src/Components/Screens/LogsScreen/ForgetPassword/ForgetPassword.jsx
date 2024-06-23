import React, { useState } from 'react';
import image from '../../../assests/resetpassword.jpg';
import './ForgetPassword.css';
import { FaEnvelope} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    let navigate = useNavigate();

    const redirectToResetPage = () => {
        navigate('/ResetPassword'); 
    };
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
    };

    return (
        <div className='ForgetPasswordContainer'>
            <div className='ForgetPasswordForm'>
                <h2>Forget Password</h2>
                <p>Enter your email and password to log in to your account,<br/> 
                    if you don't have an account, you can easily register.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">
                            <FaEnvelope />  email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='ButtonForgetPassword' onClick={redirectToResetPage}>Send Code</button>
                </form>
            </div>
            <div className='ForgetPasswordImage'>
                <img src={image} className='img' alt="ForgetPassword"/>
            </div>
        </div>
    );
}
