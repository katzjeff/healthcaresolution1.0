const mongoose = require("mongoose");

const FacilitySchema = new mongoose.Schema({
  facilityName: {
    type: String,
  },
  address: {
    type: String,
  },
  contactDetails: {
    type: String,
  },
  numberOfBeds: {
    type: String,
  },
  specialties: {
    type: String,
    enum: [
      "Family",
      "Medicine",
      "Dermatology",
      "Pediatrics",
      "Cardiology",
      "Neurology",
    ],
  },
});

module.exports = mongoose.model("Facility", FacilitySchema);
