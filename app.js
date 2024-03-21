const express = require("express"); // Import express
const app = express(); // Create an express app
const port = 3000; // Set the port

app.set("view engine", "ejs"); // Set the view engine to ejs

app.get("/", (req, res) => {
  // Set the route
  res.render("index", { title: "Achini Athukorala" }); // Render the index.ejs file
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
