const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Home Page
app.get("/", (req, res) => {
    res.send(`
      <h1>🚀 GitHub Actions Deployment Successful!</h1>  
      <h2>Version 2</h2>
             `);
});

// Health Check
app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Application is running successfully"
    });
});

// About
app.get("/about", (req, res) => {
    res.send("This project demonstrates CI/CD using Node.js, GitHub Actions, Terraform, AWS EC2, PM2, and Nginx.");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
