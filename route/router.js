const express = require("express");
const router = express.Router();
const jobController = require("../controller/jobs.js");
// CRED application
// create jobs (post) 
router.post("/add",jobController.createJob);

// get-jobs
router.get("/fetch",jobController.getJob);
// update jobs 
router.put("/update", jobController.updateJob);
// delete jobs 
router.delete("/delete", jobController.deleteJob);




module.exports = router;