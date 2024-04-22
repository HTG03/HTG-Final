const mongoose = require('mongoose')
const mongURI = "mongodb://127.0.0.1:27017/HTG"
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000;

const connectToMongo=()=>{
    mongoose.connect(mongURI)
    .then(()=>{
        console.log("Connected to MongoDB successfully");
    })
    .catch((error)=>{
        console.error("Error connecting to mongoDB:", error);
    });
};

connectToMongo();


app.use(cors())
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./route/auth'));
app.use('/api/auth1', require('./route/auth1'));
app.use('/api/event', require('./route/event'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})