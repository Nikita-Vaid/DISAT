import React, { useState } from "react";
import "../../Styles/RegForm.css";
import { Link } from "react-router-dom";
import DIAST from "../../assets/DIAST.png";
import studentimage from "../../assets/student-image2.png";
import Calendar from "../../assets/Calendar.png";
import TestDetails from "./TestDetails";

const RegForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    const validateInput = (value) => {
        if (!value) {
            setError("Please enter correct mobile number");
            return false;
        } else if (!/^\d{10}$/.test(value)) {
            setError("Enter a valid 10-digit mobile number.");
            return false;
        } else {
            setError("");
            return true;
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        validateInput(e.target.value);
    };

    const handleVerify = () => {
        if (validateInput(inputValue)) {
            setIsVerified(true);
            alert("Verification successful!");
        }
    };

    return (
        <div className="mainPart">
            <div className="main-section">
                <div className="two-main">
                    {/* Left Content */}
                    <div className="left-content">
                        <div className="DIAST-image">
                            <img src={DIAST} alt="Diast" />
                        </div>
                        <div className="student-image">
                            <img src={studentimage} alt="students" />
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className="right-form">
                        <div className="form-container">
                            <h2>Register Now</h2>
                            <p className="help-link">How to register?</p>

                            {/* Input Field with Error Handling */}
                            <input
                                type="text"
                                placeholder="Enter Mobile No."
                                className={`input-box ${error ? "error" : ""}`}
                                value={inputValue}
                                onChange={handleChange}
                            />
                            {error && <p className="error-message">{error}</p>}

                            {/* Verify Button */}
                            <button
                                className={`verify-button ${isVerified ? "verified" : ""}`}
                                onClick={handleVerify}
                                disabled={!inputValue || !!error}
                            >
                                {isVerified ? "Verified ✅" : "Verify"}
                            </button>

                            <p className="login-text">
                                Already registered? <a href="/login">Log in</a>
                            </p>
                            <p className="terms">
                                By proceeding, you agree to DOT’s <a href="/privacy">Privacy Policy</a> and <a href="/terms">T&C</a>.
                            </p>
                        </div>

                        {/* Footer Moved Inside Form Section */}
                        <footer className="footer">🎉 More than 155,300 Scholarships awarded last year</footer>
                    </div>
                </div>
            </div>
            <div>
                <TestDetails />
            </div>
            <div className="scholarship-banner">
                <p>
                    iACST Scholarship(s) are valid for <strong>30 days</strong> only.
                </p>
                <img src={Calendar} alt="Calendar" className="calendar-image" />
            </div>
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

