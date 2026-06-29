const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Home Page
app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Welcome to My DevOps Project</h1>
        <h2>CI/CD using GitHub Actions</h2>
        <p>Hosted on AWS EC2</p>
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