import React, { useState } from 'react';
import axios from 'axios';
import image from '../../../assests/sendcode.jpg';
import './ResetPassword.css';
import { FaEnvelope, FaLock, FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.patch('https://e-commercefurniturebackend.onrender.com/auth/forgetPassword', {
                email,
                password,
                code
            });

            if (response.data.message === 'success') {
                setError('');
                setSuccessMessage('Password reset successful!');
                setTimeout(() => {
                    navigate('/login'); // redirect to login page after success
                }, 3000);
            } else {
                setError(response.data.message || 'An error occurred.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className='ResetPasswordContainer'>
            <div className='ResetPasswordForm'>
                <h2>Reset Password</h2>
                <p>Enter your email and password to reset your account password.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">
                            <FaEnvelope />  Email:
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
                            <FaLock />  Password:
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
                        <label htmlFor="confirmPassword">
                            <FaLock />  Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">
                            <FaKey />  Code:
                        </label>
                        <input
                            type="text"
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="text-danger">{error}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <button type="submit" className='ButtonResetPassword'>Reset Password</button>
                    <button type="button" className='ButtonCancel' onClick={() => navigate('/')}>Cancel</button>
                </form>
            </div>
            <div className='ResetPasswordImage'>
                <img src={image} className='img' alt="ResetPassword" />
            </div>
        </div>
    );
}
