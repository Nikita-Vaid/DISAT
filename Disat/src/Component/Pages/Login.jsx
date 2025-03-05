import React from "react";
import { Link } from "react-router-dom";
import loginpic from "../../assets/login.png";
import "../../Styles/login.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Side - Image Section */}
      <div className="login-left">
        <img src={loginpic} alt="Students" className="login-image" />
        <div className="image-text">
          <h1>Aakash</h1>
          <p>Medical IIT-JEE Foundations</p>
          <span>A scholarship exam for class 5th to 12th studying and passed students</span>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-right">
        <h2>Login to your dashboard</h2>
        <form className="login-form">
          <label>Roll Number</label>
          <input type="text" placeholder="Enter your roll number" required />

          <label>Password</label>
          <div className="password-field">
            <input type="date" required />
            <FaRegCalendarAlt className="calendar-icon" />
          </div>

          <a href="/" className="forgot-link">Forgot roll number/password?</a>

          <button type="submit" className="login-btn">Login</button>

          <p className="register-text">
            Don't have an account? <Link to="/iacstexam">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
