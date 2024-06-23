import React, { useState } from 'react';
import image from '../../../assests/signup.jpg';
import './SignUp.css';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter, FaUser, FaImage } from 'react-icons/fa';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='LoginContainer'>
            <div className='LoginForm'>
                <h2>SignUp</h2>
                <p>Enter your email and password to log in to your account,<br/> 
                    if you don't have an account, you can easily register.</p>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="name">
                            <FaUser />name:
                        </label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="password">
                            <FaLock />  Confirm password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={ConfirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-groupimage">
                       <label htmlFor="image" className="form-label">
                            <FaImage />  Attached Your Photo:
                        </label>
                        <input
                            type="file"
                            id="image"
                            required
                        />
                    </div>
                    <button type="submit" className='ButtonSigUp'>SignUp</button>
                </form>
                <div className="social-login">
                    <p>or Register use</p>
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
