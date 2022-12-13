const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
// const mongoose = require("mongoose");
// const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

const app = express();

// Connect Database
connectDB();

app.use(
  "/medihealth",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
