const express = require("express");
const app = express();
const fs = require("fs");

let user;

// JSON file o‘qish
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1. Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Views
app.set("views", "views");
app.set("view engine", "ejs");

// 3. Routing

// Author portfolio page
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// Home page
app.get("/", (req, res) => {
  res.render("harid");
});

// Form create item
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.send("Item created successfully");
});

// 4. Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});