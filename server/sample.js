//Patients
const patients = [
  {
    patientID: 1,
    name: "John Smith",
    dateOfBirth: "01/01/1990",
    gender: "male",
    medicalHistory: "Coronary artery disease, hyperlipidemia, depression",
    insuranceInfo: "DEF Insurance Company, policy number 98765432",
    facilityID: 1,
    primaryCarePhysicianID: 1,
  },
  {
    patientID: 2,
    name: "Jane Doe",
    dateOfBirth: "07/07/1985",
    gender: "female",
    medicalHistory: "Type 2 diabetes, hypertension, asthma",
    insuranceInfo: "ABC Insurance Company, policy number 12345678",
    facilityID: 1,
    primaryCarePhysicianID: 1,
  },
  {
    patientID: 3,
    name: "Bob Jones",
    dateOfBirth: "05/05/1970",
    gender: "male",
    medicalHistory: "Hypertension, hyperlipidemia, depression",
    insuranceInfo: "GHI Insurance Company, policy number 13579246",
    facilityID: 3,
    primaryCarePhysicianID: 3,
  },
  {
    patientID: 4,
    name: "Sally Smith",
    dateOfBirth: "01/01/1980",
    gender: "female",
    medicalHistory: "Type 2 diabetes, hypertension, depression",
    insuranceInfo: "JKL Insurance Company, policy number 24681357",
    facilityID: 2,
    primaryCarePhysicianID: 2,
  },
];

//Employees
const employees = [
  {
    employeeID: 1,
    name: "Dr. John Smith",
    jobTitle: "Physician",
    employmentStatus: "Full-time",
    qualifications: "MD, PhD",
  },
  {
    employeeID: 2,
    name: "Jane Doe",
    jobTitle: "Physical Therapist",
    employmentStatus: "Part-time",
    qualifications:
      "Master of Physical Therapy, licensed by the state physical therapy board",
  },
  {
    employeeID: 3,
    name: "Dr. Bob Jones",
    jobTitle: "Physician",
    employmentStatus: "Full-time",
    qualifications: "MD, PhD",
  },
  {
    employeeID: 4,
    name: "Sally Smith",
    jobTitle: "Nurse",
    employmentStatus: "Full-time",
    qualifications: "RN, BSN",
  },
];

//Facility
const facility = [
  {
    facilityID: 1,
    name: "Anytown General Hospital",
    location: "123 Main Street, Anytown, USA",
    numberOfBeds: 100,
    emergencyNumber: "123-456-7890",
    availableServices: [
      "Emergency Room",
      "Inpatient",
      "Outpatient",
      "Physical Therapy",
      "Laboratory",
      "Radiology",
    ],
  },
  {
    facilityID: 2,
    name: "Some General Hospital",
    location: "456 Main Street, Anytown, USA",
    numberOfBeds: 50,
    emergencyNumber: "123-236-7890",
    availableServices: ["Emergency Room", "Inpatient", "Outpatient"],
  },
  {
    facilityID: 3,
    name: "Town General Hospital",
    location: "789 Main Street, Anytown, USA",
    numberOfBeds: 25,
    emergencyNumber: "123-456-7890",
    availableServices: [
      "Cardiology",
      "Inpatient",
      "Outpatient",
      "Laboratory",
      "Radiology",
    ],
  },
];

//Medical Records
const medicalRecords = [
  {
    patient: "John Smith",
    diagnosis: "Coronary artery disease, hyperlipidemia",
    treatment: "Scheduled for coronary artery bypass surgery",
    outcome:
      "Surgery was successful, discharged with instructions for follow-up care",
    patientID: 1,
  },
  {
    patient: "Jane Doe",
    diagnosis: "Type 2 diabetes, hypertension, asthma",
    treatment: "Metformin, lisinopril, albuterol",
    outcome: "Patient is stable",
    patientID: 2,
  },
  {
    patient: "Bob Jones",
    diagnosis: "Hypertension, hyperlipidemia, depression",
    treatment: "Lisinopril, statin, antidepressant",
    outcome: "Patient is stable",
    patientID: 3,
  },
  {
    patient: "Sally Smith",
    diagnosis: "Type 2 diabetes, hypertension, depression",
    treatment: "Metformin, lisinopril, antidepressant",
    outcome: "Patient is stable",
    patientID: 4,
  },
];

//Appointments
const appointments = [
  {
    patient: "John Smith",
    doctor: "Dr. John Smith",
    date: "01/01/2019",
    time: "10:00 AM",
    reason: "Follow-up appointment for coronary artery bypass surgery",
    patientID: 1,
    employeeID: 1,
  },
  {
    patient: "Jane Doe",
    doctor: "Dr. John Smith",
    date: "01/01/2019",
    time: "11:00 AM",
    reason: "Follow-up appointment for hypertension",
    patientID: 2,
    employeeID: 1,
  },
  {
    patient: "Bob Jones",
    doctor: "Dr. Bob Jones",
    date: "01/01/2019",
    time: "12:00 PM",
    reason: "Follow-up appointment for hypertension",
    patientID: 3,
    employeeID: 3,
  },
  {
    patient: "Sally Smith",
    doctor: "Dr. Bob Jones",
    date: "01/01/2019",
    time: "1:00 PM",
    reason: "Follow-up appointment for hypertension",
    patientID: 4,
    employeeID: 3,
  },
];

//Inventory
const inventory = [
  {
    medication: "Metformin",
    quantity: 5000,
    expirationDate: "01/01/2020",
    facilityID: 1,
  },
  {
    medication: "Lisinopril",
    quantity: 1500,
    expirationDate: "01/01/2020",
    facilityID: 1,
  },
  {
    medication: "Albuterol",
    quantity: 10000,
    expirationDate: "01/01/2020",
    facilityID: 2,
  },
  {
    medication: "Acetaminophen 500mg",
    quantity: 3000,
    expirationDate: "01/01/2023",
    facilityID: 2,
  },
  {
    medication: "Ibuprofen 200mg",
    quantity: "2000 Tablets",
    expirationDate: "06/30/2023",
    facilityID: 3,
  },
];

//Financial Info
const financialInfo = [
  {
    budget: $1000000,
    expenses: $900000,
    payments: $100000,
    facilityID: 1,
  },
  {
    budget: $500000,
    expenses: $450000,
    payments: $50000,
    facilityID: 2,
  },
  {
    budget: $250000,
    expenses: $225000,
    payments: $25000,
    facilityID: 3,
  },
];

//Quality Assurance Data
const qualityAssuranceData = [
  {
    patientSatisfactionScores: 4.5,
    incidentsOrComplaints: 0,
    facilityID: 2,
  },
  {
    patientSatisfactionScores: 4.7,
    incidentsOrComplaints:
      "One reported incident of a medication error, being investigated",
    facilityID: 1,
  },
  {
    patientSatisfactionScores: 4.2,
    incidentsOrComplaints: 0,
    facilityID: 3,
  },
];

//Performance Metrics
const performanceMetrics = [
  {
    averageLengthOfStay: 3,
    readmissionRates: 0.05,
    facilityID: 1,
  },
  {
    averageLengthOfStay: 2,
    readmissionRates: 0.02,
    facilityID: 2,
  },
  {
    averageLengthOfStay: 2,
    readmissionRates: 0.01,
    facilityID: 3,
  },
];

module.exports = {
  patients,
  employees,
  facility,
  appointments,

  medicalRecords,
  inventory,
  financialInfo,
  qualityAssuranceData,
  performanceMetrics,
};
