const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongURI = "mongodb://127.0.0.1:27017/HTG";
const express = require('express');
var cors = require('cors');
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
app.use(bodyParser.json());


// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'htg.teamwork03@gmail.com', // Replace with your email
      pass: 'sdcamtwqpbqclazl' // Replace with your email password
    }
  });
  
  app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: email,
      to: 'htg.teamwork03@gmail.com', // The email address to receive the form submissions
      subject: 'Users Query Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Message sent successfully!');
    });
  });

// Available Routes
app.use('/api/auth', require('./route/auth'));
app.use('/api/auth1', require('./route/auth1'));
app.use('/api/event', require('./route/event'));
app.use('/api/eventRegistration', require('./route/eventRegistration'));



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})