import React, { useContext, useState } from 'react';
import image from '../../../assests/login.jpg';
import './Login.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContext';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [statusErrors, setStatusErrors] = useState("");
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const schema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: sendDataRegister,
  });

  async function sendDataRegister(values) {
    try {
      const { data } = await axios.post("https://e-commercefurniturebackend.onrender.com/auth/signin", values);
      if (data.message === 'success') {
        setStatusErrors('');
        setWelcomeMessage("Welcome! We're glad to have you here.");
        setToken(data.token); 
        setTimeout(() => {
          navigate('/ProductsScreen');
        }, 3000);
      } else {
        setErrors(data.errors);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setStatusErrors(err.response.data.message);
      } else {
        setStatusErrors('An error occurred. Please try again.');
      }
    }
  }


  return (
    <div className='LoginContainer'>
      <div className='LoginForm'>
        <h2>Login</h2>
        <p>Enter your email and password to log in to your account, if you don't have an account, you can easily register.</p>
       
        {errors.map((error, index) => (
        <div key={index} className='text-danger'>{error.message}</div>
      ))}

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope />  Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">
              <FaLock />  Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className='ButtonLogin'>Login</button>
          <a href='ForgetPassword'><p style={{textAlign: 'end'}}>Forget Your Password?</p></a>
        </form>
        {statusErrors && (
          <div className="text-danger">{statusErrors}</div>
        )}
          
      {welcomeMessage && (
        <div className="alert alert-success mt-4" role="alert">
          {welcomeMessage}
        </div>
      )}
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

export default Login;
