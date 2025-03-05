const axios = require("axios");
const keys = require("../Configuration/Keys");

router.post("/send-otp", async (req, res) => {
  const { mobile } = req.body;
  if (!/^\d{10}$/.test(mobile)) return res.json({ success: false });

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStorage[mobile] = otp;

  try {
    await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${keys.SMS_API_KEY}&variables_values=${otp}&route=otp&numbers=${mobile}`);
    res.json({ success: true, message: "OTP sent successfully!" });
  } catch (err) {
    res.json({ success: false, message: "Error sending OTP" });
  }
});

