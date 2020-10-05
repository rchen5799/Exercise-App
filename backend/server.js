//retrieving express, cors default package
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configs env variables
require('dotenv').config();

//Create Express Server
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
//Parse Json
app.use(express.json());

//uri, connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { userNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


//require the files (imported from schemas)
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//Lead to designated routers
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//Starts to listen for server to run
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});