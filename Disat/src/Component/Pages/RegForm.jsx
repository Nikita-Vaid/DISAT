import React from "react";
import "../../Styles/RegForm.css";
import DIAST from "../../assets/DIAST.png"; // Ensure correct path
import { Link } from "react-router-dom";

const RegForm = () => {
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
          <input type="text" placeholder="Enter Mobile no or PSID" className="input-box error" />
          <p className="error-text">Please enter correct mobile number/PSID</p>
          <button className="verify-button" disabled>Verify</button>
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
// import React, { useState } from "react";
// import axios from "axios";

// const RegForm = () => {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [verified, setVerified] = useState(false);
//   const [error, setError] = useState("");

//   // Send OTP
//   const sendOtp = async () => {
//     if (!/^\d{10}$/.test(mobile)) {
//       setError("Enter a valid 10-digit number");
//       return;
//     }
//     setError("");

//     try {
//       const response = await axios.post("http://localhost:5000/api/send-otp", { mobile });
//       if (response.data.success) {
//         setOtpSent(true);
//         setError("");
//       } else {
//         setError(response.data.message);
//       }
//     } catch {
//       setError("Error sending OTP. Try again.");
//     }
//   };

//   // Verify OTP
//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/verify-otp", { mobile, otp });
//       if (response.data.success) {
//         setVerified(true);
//       } else {
//         setError(response.data.message);
//       }
//     } catch {
//       setError("Error verifying OTP. Try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Register Now</h2>
//       <input type="text" placeholder="Enter Mobile No" value={mobile} onChange={(e) => setMobile(e.target.value)} disabled={otpSent} />
//       {!otpSent ? (
//         <button onClick={sendOtp}>Send OTP</button>
//       ) : (
//         <>
//           <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
//           <button onClick={verifyOtp}>Verify OTP</button>
//         </>
//       )}
//       {error && <p>{error}</p>}
//       {verified && <p>✅ OTP Verified!</p>}
//     </div>
//   );
// };

// export default RegForm;

