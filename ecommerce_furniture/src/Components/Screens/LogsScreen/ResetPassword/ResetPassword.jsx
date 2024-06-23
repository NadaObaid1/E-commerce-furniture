import React, { useState } from 'react';
import image from '../../../assests/sendcode.jpg';
import './ResetPassword.css';
import { FaEnvelope, FaLock, FaKey} from 'react-icons/fa';

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');
    const [Code, setCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='ResetPasswordContainer'>
            <div className='ResetPasswordForm'>
                <h2>Reset Password</h2>
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
                    <div className="form-group">
                        <label htmlFor="password">
                            <FaLock />  Confirm password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={Confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">
                            <FaKey />  code:
                        </label>
                        <input
                            type="text"
                            id="password"
                            value={Code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='ButtonResetPassword'>Reset Password</button>
                    <button type="submit" className='ButtonCancel'>Cancel</button>
                </form>
            </div>
            <div className='ResetPasswordImage'>
                <img src={image} className='img' alt="ResetPassword"/>
            </div>
        </div>
    );
}
