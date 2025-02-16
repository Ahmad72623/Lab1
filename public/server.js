const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS
app.use(cors());

// Get the port from environment variables (required by Azure)
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from The Innovators Introduction!");
});

// Listen on the correct port
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
