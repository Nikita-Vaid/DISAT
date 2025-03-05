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

const router = express.Router();
let otpStorage = {}; // Temporary OTP storage (use Redis/DB in production)

// Route to send OTP
router.post("/send-otp", async (req, res) => {
    const { mobile } = req.body;

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
        return res.status(400).json({ success: false, message: "Invalid mobile number" });
    }

    // Prevent multiple OTP requests in a short time
    if (otpStorage[mobile]) {
        return res.status(429).json({ success: false, message: "OTP already sent. Please wait before requesting again." });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStorage[mobile] = otp;

    try {
        const response = await axios.get("https://www.fast2sms.com/dev/bulkV2", {
            headers: {
                Authorization: keys.SMS_API_KEY,
                "Content-Type": "application/json",
            },
            params: {
                variables_values: otp,
                route: "otp",
                numbers: mobile,
            },
        });

        console.log(`✅ OTP Sent to ${mobile}: ${otp}`);
        res.json({ success: true, message: "OTP sent successfully!" });

    } catch (err) {
        console.error("❌ Fast2SMS Error:", err.response ? err.response.data : err.message);
        res.status(500).json({ success: false, message: "Error sending OTP", error: err.message });
    }
});

// Route to verify OTP
router.post("/verify-otp", (req, res) => {
    const { mobile, otp } = req.body;

    if (!otpStorage[mobile]) {
        return res.status(400).json({ success: false, message: "OTP not requested. Please request an OTP first." });
    }

    if (otpStorage[mobile] == otp) {
        delete otpStorage[mobile]; // Remove OTP after successful verification
        console.log(`✅ OTP Verified for ${mobile}`);
        res.json({ success: true, message: "OTP verified successfully!" });
    } else {
        res.status(400).json({ success: false, message: "Invalid OTP. Please try again." });
    }
});

module.exports = router;


