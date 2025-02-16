const express = require("express");
const app = express();

// Set the port dynamically for Azure
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from The Innovators Introduction!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
