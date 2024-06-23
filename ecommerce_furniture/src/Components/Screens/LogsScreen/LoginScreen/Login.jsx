import React, { useState } from 'react';
import image from '../../../assests/login.jpg';
import './Login.css';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='LoginContainer'>
            <div className='LoginForm'>
                <h2>Login</h2>
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
                    <div className="form-group">
                        <label htmlFor="password">
                            <FaLock />  password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='ButtonLogin'>Login</button>
                    <a href='ForgetPassword'><p style={{textAlign: 'end'}}>Forget Your Password?</p></a>
                </form>
                <div className="social-login">
                    <p>or login use</p>
                    <button className="social-button google">
                        <FaGoogle /> Google
                    </button>
                    <button className="social-button facebook">
                        <FaFacebook /> Facebook
                    </button>
                    <button className="social-button twitter">
                        <FaTwitter /> Twitter
                    </button>
                </div>
            </div>
            <div className='LoginImage'>
                <img src={image} className='img' alt="Login"/>
            </div>
        </div>
    );
}
