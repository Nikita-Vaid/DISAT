// const axios = require("axios");
// const keys = require("../Configuration/Keys");

// router.post("/send-otp", async (req, res) => {
//   const { mobile } = req.body;
//   if (!/^\d{10}$/.test(mobile)) return res.json({ success: false });

//   const otp = Math.floor(100000 + Math.random() * 900000);
//   otpStorage[mobile] = otp;

//   try {
//     await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${keys.SMS_API_KEY}&variables_values=${otp}&route=otp&numbers=${mobile}`);
//     res.json({ success: true, message: "OTP sent successfully!" });
//   } catch (err) {
//     res.json({ success: false, message: "Error sending OTP" });
//   }
// });

const express = require("express");
const axios = require("axios");
const keys = require("../Configuration/Keys");

const router = express.Router(); // ✅ Define router before using it

let otpStorage = {}; // Temporary OTP storage (use DB for production)

// Route to send OTP
router.post("/send-otp", async (req, res) => {
  const { mobile } = req.body;

  if (!/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ success: false, message: "Invalid mobile number" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStorage[mobile] = otp; // Store OTP (for testing, use Redis/DB in production)

  try {
    await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${keys.SMS_API_KEY}&variables_values=${otp}&route=otp&numbers=${mobile}`);
    res.json({ success: true, message: "OTP sent successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error sending OTP" });
  }
});

// Route to verify OTP
router.post("/verify-otp", (req, res) => {
  const { mobile, otp } = req.body;

  if (otpStorage[mobile] && otpStorage[mobile] == otp) {
    delete otpStorage[mobile]; // Remove OTP after verification
    res.json({ success: true, message: "OTP verified successfully!" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
});

module.exports = router; // ✅ Export router
