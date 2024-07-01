import React, { useState } from 'react';
import axios from 'axios';
import image from '../../../assests/signup.jpg';
import './SignUp.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter, FaUser, FaImage, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function SignUp() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [statusErrors, setStatusErrors] = useState("");

    // Define data validation schema using Yup
    const schema = Yup.object().shape({
        userName: Yup.string().required("Name is required").min(3, "Minimum 3 characters").max(12, "Maximum 12 characters"),
        email: Yup.string().required("Email is required").email("Invalid email format"),
        password: Yup.string().required("Password is required"),
        phone: Yup.string().required("Phone number is required"),
        address: Yup.string().required("Address is required"),
        image: Yup.mixed().required('Image is required'),
    });

    // Use useFormik to manage the form
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            image: null,
        },
        validationSchema: schema,
        onSubmit: sendDataRegister,
    });

    // Function to send data to the endpoint
    async function sendDataRegister(values) {
        const formData = new FormData();
        formData.append('userName', values.userName);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('phone', values.phone);
        formData.append('address', values.address);
        formData.append('image', values.image);

        try {
            const { data } = await axios.post("https://e-commercefurniturebackend.onrender.com/auth/signup", formData);
            if (data.message === 'success') {
                setErrors([]);
                setStatusErrors('');
                navigate('/Login');
            } else {
                setErrors(data.errors || []);
                setStatusErrors('Registration failed. Please check your details and try again.');
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
                <h2>SignUp</h2>
                <p>Enter your details below to create an account:</p>

                {statusErrors && <div className='text-danger'>{statusErrors}</div>}

                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <FaUser /> Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="userName"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.userName && formik.errors.userName ? (
                            <div className="text-danger">{formik.errors.userName}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <FaEnvelope /> Email:
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
                            <FaLock /> Password:
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
                    <div className="form-group">
                        <label htmlFor="phone">
                            <FaPhone /> Phone:
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-danger">{formik.errors.phone}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">
                            <FaMapMarkerAlt /> Address:
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="text-danger">{formik.errors.address}</div>
                        ) : null}
                    </div>
                    <div className="form-groupimage">
                        <label htmlFor="image" className="form-label">
                            <FaImage /> Attach Your Photo:
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={(event) => {
                                formik.setFieldValue("image", event.currentTarget.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.image && formik.errors.image ? (
                            <div className="text-danger">{formik.errors.image}</div>
                        ) : null}
                    </div>
                    <button type="submit" className='ButtonSignUp'>SignUp</button>
                </form>
                <div className="social-login">
                    <p>or Register using</p>
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
