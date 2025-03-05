// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Import Routes
// const otpRoutes = require("./Routes/otpRoutes.js");
// app.use("/api", otpRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const otpRoutes = require("./Routes/otpRoutes"); // ✅ Import otpRoutes

const app = express();
app.use(express.json());
app.use(cors());

// Use OTP Routes
app.use("/api", otpRoutes); // ✅ Add the OTP routes under "/api"

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
