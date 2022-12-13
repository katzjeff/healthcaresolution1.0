const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  qualifications: {
    type: String,
  },
  specialty: {
    type: String,
  },
  facilityID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Facility",
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
