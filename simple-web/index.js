// create a express server
const express = require("express");
const app = express();
const port = 8080;

// create a route for the app
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// listen to port 3000 by default
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});