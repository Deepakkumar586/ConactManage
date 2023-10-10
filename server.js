const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const router = require("./routes/contactRoute")
const errorHandler = require("./middleware/errorHandler");
const database = require('./config/user_database')


database.connect();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/contacts',router);


// for errorMessage in Json FOrm
app.use(errorHandler);


app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`)
    
})