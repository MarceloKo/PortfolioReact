const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const app = express();

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({limit:"50mb",extended:false}))
app.use(cors()) 

app.use(routes)

app.get('/', (req, res) => {
    res.json({message:"Hello World"});
})

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.f1hea.mongodb.net/Dashboard?retryWrites=true&w=majority`)
    .then(()=>{

        app.listen(process.env.PORT)   
    })
    .catch(err => console.log(err))
