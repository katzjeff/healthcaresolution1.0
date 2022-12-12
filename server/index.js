const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();

// Allow cross-origin requests
app.use(cors());


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



