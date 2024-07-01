import React, { useState } from "react";
import image from "../../../assests/resetpassword.jpg";
import "./ForgetPassword.css";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [errors, setErrors] = useState([]);
  const [statusErrors, setStatusErrors] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Not a valid email"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: sendDataRegister,
  });

  async function sendDataRegister(values) {
    try {
      const { data } = await axios.patch(
        "https://e-commercefurniturebackend.onrender.com/auth/SendCode",
        values
      );
      
      console.log("Server response:", data); // تسجيل استجابة الخادم الكاملة

      if (data.message === "success") {
        setErrors([]);
        setStatusErrors("");
        setWelcomeMessage("The code has been successfully sent to your email");
        setTimeout(() => {
          navigate("/ResetPassword");
        }, 3000);
      } else {
        setErrors(data.errors || []);
        setStatusErrors("Failed to send code. Please try again.");
      }
    } catch (err) {
      console.error("Error response:", err.response); // تسجيل استجابة الخطأ
      if (err.response && err.response.data && err.response.data.message) {
        setStatusErrors(err.response.data.message);
      } else {
        setStatusErrors("An error occurred. Please try again.");
      }
    }
  }

  return (
    <div className="ForgetPasswordContainer">
      <div className="ForgetPasswordForm">
        <h2>Forget Password</h2>
        <p>Enter your email to receive a code to reset your password.</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope /> Email:
            </label>
            <input
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <button type="submit" className="ButtonForgetPassword">
            Send Code
          </button>
        </form>

        {statusErrors && <div className="mb-3 text-danger">{statusErrors}</div>}

        {welcomeMessage && (
          <div className="alert alert-success mt-4" role="alert">
            {welcomeMessage}
          </div>
        )}
      </div>
      <div className="ForgetPasswordImage">
        <img src={image} className="img" alt="ForgetPassword" />
      </div>
    </div>
  );
}
