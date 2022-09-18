const express = require("express");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); //static file: use in template engine

console.log('path.join(__dirname, "public")', path.join(__dirname, "public"));
app.get("/", (req, res) => {
  // /home/thanhpham/Desktop/harshu-project-setup-by-thanh/index.html
  res.sendFile(`index.html`); // /home/thanhpham/Desktop/harshu-project-setup-by-thanh/public/index.html
});

app.listen(3000, () => console.log("server is running in port 3000"));
