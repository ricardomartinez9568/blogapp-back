
const express = require('express');
const port = 3000
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Ricky1:password-1@cluster0-dcstn.mongodb.net/Cluster0?retryWrites=true&w=majority";

require('./models/user.model')
require('./config/passportConfig');

const rtsIndex = require('./routes/index.router');



// midleware
app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize())
app.use('/api',rtsIndex)

'/api/register'


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },(err,client) =>{
    if (err) throw err;
    console.log('Successfully connected to DB server');
})


app.listen(port, () => {
    console.log(`app is listening to port ${port}`)
})



