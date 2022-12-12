import React from 'react';
import express from 'express';
import mongoose from 'mongoose';
import grahpqlHTTP from 'express-graphql';


const app = express();

app.use('/graphql', grahpqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log('Listening on port 4000');
});
