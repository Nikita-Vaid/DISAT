import React from "react";
import "../../Styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/students.jpg" alt="Students" className="login-image" />
        <div className="login-overlay">
          <h1>Aakash</h1>
          <p>Medical IIT-JEE Foundations</p>
          <p>A scholarship exam for class 5th to 12th studying and passed students</p>
        </div>
      </div>

      <div className="login-right">
        <h2>Login to your dashboard</h2>
        <form className="login-form">
          <label>Roll Number</label>
          <input type="text" placeholder="Enter your roll number" />

          <label>Password</label>
          <input type="date" placeholder="Enter Date of birth (DD/MM/YYYY)" />

          <a href="/" className="forgot-link">Forgot roll number/password?</a>

          <button type="submit" className="login-btn">Login</button>

          <p className="register-text">
            Don't have an account? <Link to ="/iacstexam" >Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
