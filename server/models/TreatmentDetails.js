const mongoose = require("mongoose");

const TreatmentDetailsSchema = new mongoose.Schema({
  patientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  employeeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  facilityID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Facility",
  },
  diagnosis: {
    type: String,
  },
  treatment: {
    type: String,
  },
  medication: {
    type: String,
  },
  dateTimeOfTreatment: {
    type: String,
  },
});

module.exports = mongoose.model("TreatmentDetails", TreatmentDetailsSchema);
