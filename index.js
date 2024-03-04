const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const router = require("./route/router.js");
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/JobPosting").then(()=>{
console.log("Database connected");
}).catch((e)=>{
    console.log("error in db", e);
});
app.get("/", (req, res) => {
  res.send("This is Arya");
});

app.use("/api/jobs", router);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
