const {
  patients,
  facility,
  employees,
  treatmentDetails,
} = require("../sample.js");

//Mongoose models

const Patient = require("../models/Patients");
const Facility = require("../models/Facility");
const Employee = require("../models/Employees");
const TreatmentDetails = require("../models/TreatmentDetails");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

//Patient Type
const PatientType = new GraphQLObjectType({
  name: "Patient",
  fields: () => ({
    patientID: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
    address: { type: GraphQLString },
    contactDetails: { type: GraphQLString },
  }),
});

//Facility Type
const FacilityType = new GraphQLObjectType({
  name: "Facility",
  fields: () => ({
    facilityID: { type: GraphQLID },
    facilityName: { type: GraphQLString },
    address: { type: GraphQLString },
    contactDetails: { type: GraphQLString },
    numberOfBeds: { type: GraphQLInt },
    specialties: { type: GraphQLString },
  }),
});

//Employee List
const EmployeeListType = new GraphQLObjectType({
  name: "EmployeeList",
  fields: () => ({
    employeeID: { type: GraphQLID },
    name: { type: GraphQLString },
    qualifications: { type: GraphQLString },
    specialty: { type: GraphQLString },
    facility: {
      type: FacilityType,
      resolve(parent, args) {
        return Facility.findById(parent.facilityID);
      },
    },
  }),
});

//Treatment Details
const TreatmentDetailsType = new GraphQLObjectType({
  name: "TreatmentDetails",
  fields: () => ({
    treatmentID: { type: GraphQLID },
    diagnosis: { type: GraphQLString },
    treatment: { type: GraphQLString },
    medication: { type: GraphQLString },
    dateTimeOfTreatment: { type: GraphQLString },

    patient: {
      type: PatientType,
      resolve(parent, args) {
        return Patient.findById(parent.patientID);
      },
    },
    employee: {
      type: EmployeeListType,
      resolve(parent, args) {
        return Employee.findById(parent.employeeID);
      },
    },
    facility: {
      type: FacilityType,
      resolve(parent, args) {
        return facility.find(
          (facility) => facility.facilityID === parent.facilityID
        );
      },
    },
  }),
});

//RootQueries
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Queries used to fetch data from the database",
  fields: {
    patient: {
      type: PatientType,
      args: { patientID: { type: GraphQLID } },
      resolve(parent, args) {
        return Patient.findById(args.patientID);
      },
    },
    patients: {
      type: new GraphQLList(PatientType),
      resolve(parent, args) {
        return Patient.find();
      },
    },
    facility: {
      type: FacilityType,
      args: { facilityID: { type: GraphQLID } },
      resolve(parent, args) {
        return Facility.findById(args.facilityID);
      },
    },
    facilities: {
      type: new GraphQLList(FacilityType),
      resolve(parent, args) {
        return Facility.find();
      },
    },
    employee: {
      type: EmployeeListType,
      args: { employeeID: { type: GraphQLID } },
      resolve(parent, args) {
        return Employee.findById(args.employeeID);
      },
    },
    employees: {
      type: new GraphQLList(EmployeeListType),
      resolve(parent, args) {
        return Employee.find();
      },
    },
    treatmentDetails: {
      type: TreatmentDetailsType,
      args: { treatmentID: { type: GraphQLID } },
      resolve(parent, args) {
        return TreatmentDetails.findById(args.treatmentID);
      },
    },
    treatmentDetailsList: {
      type: new GraphQLList(TreatmentDetailsType),
      resolve(parent, args) {
        return TreatmentDetails.find();
      },
    },
  },
});

//Mutation
const mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Functions to alter data, that is add, update and delete",
  fields: {
    //Patient Mutations
    //Add new patient
    addPatient: {
      type: PatientType,
      args: {
        
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        gender: { type: GraphQLString },
        address: { type: GraphQLString },
        contactDetails: { type: GraphQLString },
      },
      resolve(parent, args) {
        const patient = new Patient({
          name: args.name,
          age: args.age,
          gender: args.gender,
          address: args.address,
          contactDetails: args.contactDetails,
        });
        return patient.save();
      },
    },

    //Delete patient
    deletePatient: {
      type: PatientType,
      args: { patientID: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Patient.findByIdAndRemove(args.patientID);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
