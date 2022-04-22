//first file to be loaded in the backend server 
// stack - Node.js

//Import all dependencies
const express = require('express');
const mongo = require('./connection')
const dotenv = require('dotenv')
const authorize = require('./modules/authorize');

const registerRouter = require('./routes/register');
const usersRouter = require('./routes/users');
const companiesRouter = require('./routes/companies');
const questionRouter = require('./routes/questions');
const tagsRouter = require('./routes/tags');
const answerRouter = require('./routes/answers');

dotenv.config();

//use 
const app = express();

// To convert re.body into JSON format.
app.use(express.json());

app.use('/', (req,res,next) => {
    console.log("We are on backend index page");
    next();
});

mongo.connect();



//define router paths
app.use('/register', registerRouter);
app.use(authorize.autenticateToken);
app.use('/users', usersRouter);
app.use('/companies', companiesRouter);
app.use('/questions', questionRouter);
app.use('/tags', tagsRouter);
app.use('/answers',answerRouter);

app.listen(process.env.PORT || 3002)
