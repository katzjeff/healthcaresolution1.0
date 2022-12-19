const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  patientID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  address: {
    type: String,
  },
  contactDetails: {
    type: String,
  },
});

module.exports = mongoose.model("Patients", PatientSchema);
