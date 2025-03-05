import React from "react";
import "./RegForm.css";
import DIAST from "../../assets/DIAST.png"; // Ensure correct path

const RegForm = () => {
  return (
    <div className="main-section">
      {/* Left Content */}
      <div className="left-content">
         <div className="navbar-logo">
                 <img
                   src={DIAST}
                   alt="Diast"
                 />
                 
               </div>
      </div>

      {/* Right Form Section */}
      <div className="right-form">
        <div className="form-container">
          <h2>Register Now</h2>
          <p className="help-link">How to register?</p>
          <input type="text" placeholder="Enter Mobile no or PSID" className="input-box error" />
          <button className="verify-button" disabled>Verify</button>
          <p className="login-text">
            Already registered? <a href="/login">Log in</a>
          </p>
          <p className="terms">
            By proceeding, you agree to Aakash’s <a href="/privacy">Privacy Policy</a> and <a href="/terms">T&C</a>.
          </p>
        </div>
        
      </div>

      {/* Footer */}
      <footer className="footer">🎉 More than 155,300 Scholarships awarded last year</footer>
    </div>
  );
};

export default RegForm;
