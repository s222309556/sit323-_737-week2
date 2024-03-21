const express = require("express"); // Import express
const app = express(); // Create an express app
const port = 3000; // Set the port number for the server

// Set the view engine to ejs
app.set("view engine", "ejs");

// Define a route for the root URL "/"
app.get("/", (req, res) => {
  // When a request is made to the root URL, render the index.ejs file
  // Pass a variable "title" with the value "Achini Athukorala" to the template
  res.render("index", { title: "Achini Athukorala" }); // Render the index.ejs file
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
