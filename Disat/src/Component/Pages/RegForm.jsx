// import React from "react";
// import "../../Styles/RegForm.css";
// import DIAST from "../../assets/DIAST.png"; // Ensure correct path
// import { Link } from "react-router-dom";

// const RegForm = () => {
//   return (
//     <div className="main-section">
//       {/* Left Content */}
//       <div className="left-content">
//         <h1 className="title">
//           <span className="iacst">iACST</span>
//           <br />
//           Instant Admission Cum Scholarship Test
//         </h1>
//         <p className="scholarship-text">
//           Up to <span className="highlight">90% Scholarship</span> on NEET, JEE & Foundation Courses
//         </p>
//       </div>

//       {/* Right Form Section */}
//       <div className="right-form">
//         <div className="form-container">
//           <h2>Register Now</h2>
//           <p className="help-link">How to register?</p>
//           <input type="text" placeholder="Enter Mobile no or PSID" className="input-box error" />
//           <p className="error-text">Please enter correct mobile number/PSID</p>
//           <button className="verify-button" disabled>Verify</button>
//           <p className="login-text">
//             Already registered? <Link to="/">Log in</Link>
//           </p>
//           <p className="terms">
//             By proceeding, you agree to Aakash’s <a href="/privacy">Privacy Policy</a> and <a href="/terms">T&C</a>.
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">🎉 More than 155,300 Scholarships awarded last year</footer>
//     </div>
//   );
// };

// export default RegForm;

import React, { useState } from "react";
import axios from "axios";
import "../../Styles/RegForm.css";
import DIAST from "../../assets/DIAST.png";
import { Link } from "react-router-dom";

const RegForm = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  // Function to send OTP
  const sendOtp = async () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:5000/api/send-otp", { mobile });
      if (response.data.success) {
        setOtpSent(true);
        setError("");
      } else {
        setError("Failed to send OTP. Try again.");
      }
    } catch (err) {
      setError("Error sending OTP. Please check your connection.");
    }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/verify-otp", { mobile, otp });
      if (response.data.success) {
        setVerified(true);
        setError("");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("Error verifying OTP. Please try again.");
    }
  };

  return (
    <div className="main-section">
      {/* Left Content */}
      <div className="left-content">
        <h1 className="title">
          <span className="iacst">iACST</span>
          <br />
          Instant Admission Cum Scholarship Test
        </h1>
        <p className="scholarship-text">
          Up to <span className="highlight">90% Scholarship</span> on NEET, JEE & Foundation Courses
        </p>
      </div>

      {/* Right Form Section */}
      <div className="right-form">
        <div className="form-container">
          <h2>Register Now</h2>
          <p className="help-link">How to register?</p>

          {/* Mobile Number Input */}
          <input
            type="text"
            placeholder="Enter Mobile no or PSID"
            className="input-box"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            disabled={otpSent} // Disable input after OTP is sent
          />
          
          {/* Error Message */}
          {error && <p className="error-text">{error}</p>}

          {/* Verify Button */}
          {!otpSent ? (
            <button className="verify-button" onClick={sendOtp}>
              Send OTP
            </button>
          ) : (
            <>
              {/* OTP Input */}
              <input
                type="text"
                placeholder="Enter OTP"
                className="input-box"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="verify-button" onClick={verifyOtp}>
                Verify OTP
              </button>
            </>
          )}

          {/* Registration Success Message */}
          {verified && <p className="success-text">✅ Registration Successful!</p>}

          <p className="login-text">
            Already registered? <Link to="/">Log in</Link>
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


