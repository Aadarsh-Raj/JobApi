const JobModel = require("../model/jobsDb");

const createJob = async (req, res) => {
    try {
  const newJob = new JobModel(req.body);
  const savingJob = await newJob.save();

    res.json({
      success: true,
      message: "Job Added successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong, check your inputs please",
    });
    console.log("error", error);
  }
};

const getJob = async (req, res) => {
 try {
    const jobsList = await JobModel.find({});
    res.json({
        success:true,
        message: "You are welcome",
        results: jobsList
    })
 } catch (error) {
    res.json({
        success:false,
        message: "Something went wrong, try again later"
    })
 }
 
};

const updateJob = async (req, res) => {
 try {
    await JobModel.updateOne({_id:req.body._id}, {$set:req.body});

    res.json(
        {
            success:true,
            message: "Job edited successfully",
        }
    )
 } catch (error) {
    res.json(
        {
            success:false,
            message: "Something went wrong, please confirm your id",
        }
    )
 }
};

const deleteJob = async (req, res) => {
  try {
    await JobModel.deleteOne({_id: req.body._id})
    res.json({
        success: true,
        message: "Job deleted successfully"
    })
  } catch (error) {
    res.json(
        {
            success:false,
            message: "Something went wrong, Please check your id",
        }
    )
  }
};

module.exports = {
  createJob,
  getJob,
  updateJob,
  deleteJob,
};
