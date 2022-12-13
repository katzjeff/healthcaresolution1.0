//PatientsList

const patients = [
  {
    patientID: "1",
    name: "John Smith",
    age: "30",
    gender: "male",
    address: "123 Main Street, Anytown, USA",
    contactDetails: "123-456-7890",
  },
  {
    patientID: "2",
    name: "Jane Doe",
    age: "35",
    gender: "female",
    address: "456 Main Street, Anytown, USA",
    contactDetails: "555-555-3456",
  },
  {
    patientID: "3",
    name: "Bob Jones",
    age: "40",
    gender: "male",
    address: "789 Main Street, Anytown, USA",
    contactDetails: "555-555-5678",
  },
];

//FacilityList

const facility = [
  {
    facilityID: "1",
    facilityName: "Anytown Hospital",
    address: "123 Main Street, Anytown, USA",
    contactDetails: "123-456-7890",
    numberOfBeds: "100",
    specialties: "Family Medicine, Dermatology, Pediatrics",
  },
  {
    facilityID: "2",
    facilityName: "Anytown Community Clinic",
    address: "678 Elm St, Anytown USA",
    contactDetails: "555-555-3456",
    numberOfBeds: "0",
    specialties: "Family Medicine, Dermatology",
  },
  {
    facilityID: "3",
    facilityName: "Anytown Medical Center",
    address: "789 Elm St, Anytown USA",
    contactDetails: "555-555-5678",
    numberOfBeds: "250",
    specialties:
      "Family Medicine, Dermatology, Pediatrics, Cardiology, Neurology",
  },
];

//EmployeeList

const employees = [
  {
    employeeID: "1",
    name: "Dr. John Smith",
    qualifications: "MD, Family Medicine",
    specialty: "Family Medicine",
    facilityID: "1",
  },
  {
    employeeID: "2",
    name: "Lisa Williams",
    qualifications: "MD",
    specialty: "Pediatrics",
    facilityID: "3",
  },
  {
    employeeID: "3",
    name: "Dr. Bob Jones",
    qualifications: "MD",
    specialty: "Cardiology",
    facilityID: "2",
  },
];

//TreatmentDetails

const treatmentDetails = [
  {
    treatmentID: "1",
    patientID: "1",
    employeeID: "1",
    facilityID: "1",
    diagnosis: "Chest pain",
    treatment: "Prescribed medication and follow-up appointment",
    medication: "Aspirin, Plavix, Metoprolol",
    dateTimeOfTreatment: "01/01/2020 10:00 AM",
  },
  {
    treatmentID: "2",
    patientID: "2",
    employeeID: "2",
    facilityID: "3",
    diagnosis: "Flu",
    treatment: "Prescribed medication and rest",
    medication: "Tylenol, Tamiflu",
    dateTimeOfTreatment: "01/12/2021 10:00 AM",
  },
  {
    treatmentID: "3",
    patientID: "3",
    employeeID: "3",
    facilityID: "2",
    diagnosis: "Chest pain",
    treatment: "Prescribed medication and follow-up appointment",
    medication: "Aspirin, Plavix, Metoprolol",
    dateTimeOfTreatment: "01/01/2020 10:00 AM",
  },
];

module.exports = {
  patients,
  facility,
  employees,
  treatmentDetails,
};

// const patients = [
//   {
//     patientID: 1,
//     name: "John Smith",
//     dateOfBirth: "01/01/1990",
//     gender: "male",
//     medicalHistory: "Coronary artery disease, hyperlipidemia, depression",
//     insuranceInfo: "DEF Insurance Company, policy number 98765432",
//     facilityID: 1,
//     employeeID: 1,
//     appointmentID: 1,
//   },
//   {
//     patientID: 2,
//     name: "Jane Doe",
//     dateOfBirth: "07/07/1985",
//     gender: "female",
//     medicalHistory: "Type 2 diabetes, hypertension, asthma",
//     insuranceInfo: "ABC Insurance Company, policy number 12345678",
//     facilityID: 1,
//     employeeID: 1,
//     appointmentID: 2,
//   },
//   {
//     patientID: 3,
//     name: "Bob Jones",
//     dateOfBirth: "05/05/1970",
//     gender: "male",
//     medicalHistory: "Hypertension, hyperlipidemia, depression",
//     insuranceInfo: "GHI Insurance Company, policy number 13579246",
//     facilityID: 3,
//     employeeID: 3,
//     appointmentID: 3,
//   },
//   {
//     patientID: 4,
//     name: "Sally Smith",
//     dateOfBirth: "01/01/1980",
//     gender: "female",
//     medicalHistory: "Type 2 diabetes, hypertension, depression",
//     insuranceInfo: "JKL Insurance Company, policy number 24681357",
//     facilityID: 2,
//     employeeID: 2,
//     appointmentID: 4,
//   },
// ];

// //Employees
// const employees = [
//   {
//     employeeID: 1,
//     name: "Dr. John Smith",
//     jobTitle: "Physician",
//     employmentStatus: "Full-time",
//     qualifications: "MD, PhD",
//     facilityID: 1,
//   },
//   {
//     employeeID: 2,
//     name: "Jane Doe",
//     jobTitle: "Physical Therapist",
//     employmentStatus: "Part-time",
//     qualifications:
//       "Master of Physical Therapy, licensed by the state physical therapy board",
//     facilityID: 2,
//   },
//   {
//     employeeID: 3,
//     name: "Dr. Bob Jones",
//     jobTitle: "Physician",
//     employmentStatus: "Full-time",
//     qualifications: "MD, PhD",
//     facilityID: 3,
//   },
//   {
//     employeeID: 4,
//     name: "Sally Smith",
//     jobTitle: "Nurse",
//     employmentStatus: "Full-time",
//     qualifications: "RN, BSN",
//     facilityID: 2,
//   },
// ];

// //Facility
// const facility = [
//   {
//     facilityID: 1,
//     name: "Anytown General Hospital",
//     location: "123 Main Street, Anytown, USA",
//     numberOfBeds: 100,
//     emergencyNumber: "123-456-7890",
//     availableServices: [
//       "Emergency Room",
//       "Inpatient",
//       "Outpatient",
//       "Physical Therapy",
//       "Laboratory",
//       "Radiology",
//     ],
//   },
//   {
//     facilityID: 2,
//     name: "Some General Hospital",
//     location: "456 Main Street, Anytown, USA",
//     numberOfBeds: 50,
//     emergencyNumber: "123-236-7890",
//     availableServices: ["Emergency Room", "Inpatient", "Outpatient"],
//   },
//   {
//     facilityID: 3,
//     name: "Town General Hospital",
//     location: "789 Main Street, Anytown, USA",
//     numberOfBeds: 25,
//     emergencyNumber: "123-456-7890",
//     availableServices: [
//       "Cardiology",
//       "Inpatient",
//       "Outpatient",
//       "Laboratory",
//       "Radiology",
//     ],
//   },
// ];

// //Medical Records
// const medicalRecords = [
//   {
//     diagnosis: "Coronary artery disease, hyperlipidemia",
//     treatment: "Scheduled for coronary artery bypass surgery",
//     outcome:
//       "Surgery was successful, discharged with instructions for follow-up care",
//     patientID: 1,
//   },
//   {
//     diagnosis: "Type 2 diabetes, hypertension, asthma",
//     treatment: "Metformin, lisinopril, albuterol",
//     outcome: "Patient is stable",
//     patientID: 2,
//   },
//   {
//     diagnosis: "Hypertension, hyperlipidemia, depression",
//     treatment: "Lisinopril, statin, antidepressant",
//     outcome: "Patient is stable",
//     patientID: 3,
//   },
//   {
//     diagnosis: "Type 2 diabetes, hypertension, depression",
//     treatment: "Metformin, lisinopril, antidepressant",
//     outcome: "Patient is stable",
//     patientID: 4,
//   },
// ];

// //Appointments
// const appointments = [
//   {
//     appointmentID: 1,
//     patient: "John Smith",
//     doctor: "Dr. John Smith",
//     date: "01/01/2019",
//     time: "10:00 AM",
//     reason: "Follow-up appointment for coronary artery bypass surgery",
//     patientID: 1,
//     employeeID: 1,
//   },
//   {
//     appointmentID: 2,
//     patient: "Jane Doe",
//     doctor: "Dr. John Smith",
//     date: "01/01/2019",
//     time: "11:00 AM",
//     reason: "Follow-up appointment for hypertension",
//     patientID: 2,
//     employeeID: 1,
//   },
//   {
//     appointmentID: 3,
//     patient: "Bob Jones",
//     doctor: "Dr. Bob Jones",
//     date: "01/01/2019",
//     time: "12:00 PM",
//     reason: "Follow-up appointment for hypertension",
//     patientID: 3,
//     employeeID: 3,
//   },
//   {
//     appointmentID: 4,
//     patient: "Sally Smith",
//     doctor: "Dr. Bob Jones",
//     date: "01/01/2019",
//     time: "1:00 PM",
//     reason: "Follow-up appointment for hypertension",
//     patientID: 4,
//     employeeID: 3,
//   },
// ];

// //Inventory
// const inventory = [
//   {
//     medication: "Metformin",
//     quantity: 5000,
//     expirationDate: "01/01/2020",
//     facilityID: 1,
//   },
//   {
//     medication: "Lisinopril",
//     quantity: 1500,
//     expirationDate: "01/01/2020",
//     facilityID: 1,
//   },
//   {
//     medication: "Albuterol",
//     quantity: 10000,
//     expirationDate: "01/01/2020",
//     facilityID: 2,
//   },
//   {
//     medication: "Acetaminophen 500mg",
//     quantity: 3000,
//     expirationDate: "01/01/2023",
//     facilityID: 2,
//   },
//   {
//     medication: "Ibuprofen 200mg",
//     quantity: "2000 Tablets",
//     expirationDate: "06/30/2023",
//     facilityID: 3,
//   },
// ];

// //Financial Info
// const financialInfo = [
//   {
//     budget: "$1000000",
//     expenses: "$900000",
//     payments: "$100000",
//     facilityID: 1,
//   },
//   {
//     budget: "$500000",
//     expenses: "$450000",
//     payments: "$50000",
//     facilityID: 2,
//   },
//   {
//     budget: "$250000",
//     expenses: "$225000",
//     payments: "$25000",
//     facilityID: 3,
//   },
// ];

// //Quality Assurance Data
// const qualityAssuranceData = [
//   {
//     patientSatisfactionScores: 4.5,
//     incidentsOrComplaints: 0,
//     facilityID: 2,
//   },
//   {
//     patientSatisfactionScores: 4.7,
//     incidentsOrComplaints:
//       "One reported incident of a medication error, being investigated",
//     facilityID: 1,
//   },
//   {
//     patientSatisfactionScores: 4.2,
//     incidentsOrComplaints: 0,
//     facilityID: 3,
//   },
// ];

// //Performance Metrics
// const performanceMetrics = [
//   {
//     averageLengthOfStay: 3,
//     readmissionRates: 0.05,
//     facilityID: 1,
//   },
//   {
//     averageLengthOfStay: 2,
//     readmissionRates: 0.02,
//     facilityID: 2,
//   },
//   {
//     averageLengthOfStay: 2,
//     readmissionRates: 0.01,
//     facilityID: 3,
//   },
// ];

// module.exports = {
//   patients,
//   employees,
//   facility,
//   appointments,
//   medicalRecords,
//   inventory,
//   financialInfo,
//   qualityAssuranceData,
//   performanceMetrics,
// };
