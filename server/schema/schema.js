const {
  patients,
  facility,
  employees,
  treatmentDetails,
} = require("../sample.js");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
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

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    patient: {
      type: PatientType,
      args: { patientID: { type: GraphQLID } },
      resolve(parent, args) {
        return patients.find((patient) => patient.patientID === args.patientID);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
