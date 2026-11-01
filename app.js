
const express = require("express");

const app = express();

// Home route
app.get("/", (request, response) => {
    response.status(200).send("Welcome to my Express Server");
});

// About route
app.get("/about", (request, response) => {
    response.status(200).json({
        name: "Kiran Kumar",
        section: "CSE-AIDE-2A"
    });
});

// Time route
app.get("/time", (request, response) => {
    response.status(200).send(new Date().toString());
});

// 404 Not Found route
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
