const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};
const getJob = async (req, res) => {
  res.send("get Job");
};
const createJob = async (req, res) => {
  res.json ("createJob");
};
const updateJob = async (req, res) => {
  res.send("updateJob");
};
const deleteJob = async (req, res) => {
  res.send("deleteJob");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
 };
