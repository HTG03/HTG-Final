const express = require("express");
const router = express.Router();
const eventRegistration = require("../modals/RegisterEvent");
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");
const nodemailer = require("nodemailer");
const QRCode = require('qrcode');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

// Email Generator

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "htg.teamwork03@gmail.com",
    pass: "sdcamtwqpbqclazl",
  },
});

// Promisify fs.readFile
const readFileAsync = promisify(fs.readFile);

router.post("/sendEmail/", async (req, res) => {
  try {
    let id=req.body.id;
    const student = await eventRegistration.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    console.log(student);
    const subject = "Ticket Confirmation";
    const message = "Your QR code is attached";

    // Generate QR code for the student's name
    const qrCodeData = `${student.studentname} - ${student.studentrollno}`;
    // const qrCodeImagePath = `./${student._id}_qrcode.png`;
    const qrCodeImagePath = path.join(__dirname, `${student._id}_qrcode.png`);
    await QRCode.toFile(qrCodeImagePath, qrCodeData);

    // Read HTML template
    const htmlTemplatePath = path.join(__dirname, '../templates/emailTemplate.html');
    let htmlTemplate = await readFileAsync(htmlTemplatePath, 'utf8');
    htmlTemplate = htmlTemplate
    .replace('{{name}}', student.studentname)
    .replace('{{rollno}}', student.studentrollno)
    .replace('{{eventName}}', student.eventname)
    .replace('{{eventDate}}', student.eventdate)
    .replace('{{eventTime}}', student.eventtime)
    .replace('{{eventlocation}}', student.eventlocation)
    ;

    let mailOptions = {
      from: "htg.teamwork03@gmail.com", // sender address
      to: student.studentemail, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: htmlTemplate,
      attachments: [{
        filename: `${student._id}_qrcode.png`,
        path: qrCodeImagePath,
        cid: 'qrCodeImage' // same cid value as in the html img src
      }]
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      // Clean up the QR code file after sending the email
      fs.unlink(qrCodeImagePath, (err) => {
        if (err) {
          console.error('Failed to delete QR code file:', err);
        }
      });

      if (error) {
        console.error('Failed to send email:', error);
        return res.status(500).send('Failed to send email');
      }

      console.log('Email sent successfully:', info.response);
      res.status(200).send('Email sent successfully!');
    });

  } catch (error) {
    console.error('Internal server error:', error.message);
    res.status(500).send('Internal server error');
  }
});
  
//Route 1 : Register a  event : POST (/api/event/registerEvent). Login require
router.post(
    "/registerEvent",
    fetchuser,
    async (req, res) => {
      try {
        const {studentname,studentrollno,studentemail,studentbranch,studentyear,studentmobile,eventname,eventdate,eventtime,eventlocation} = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
         const register = new eventRegistration({
          studentname,
          studentrollno,
          studentemail,
          studentbranch,
          studentyear,
          studentmobile,
          eventname,
          eventdate,
          eventtime,
          eventlocation,
          user: req.user.id,
        });
        const savedRegistration = await register.save();
        res.json(savedRegistration);
    
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
      }
    }
);

//Route 2 : Get all the Students - Year: 1st and Branch='CS' . Login required

router.get("/fetch1CS",  async (req, res) => {
  try {
    const stuCS1 = await eventRegistration.find({studentbranch: "CS", studentyear: "1st"})
    res.json(stuCS1);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});


//Route 3 : Get all the Students - Year: 1st and Branch='IT' . Login required

router.get("/fetch1IT",  async (req, res) => {
  try {
    const stuIT1 = await eventRegistration.find({studentbranch: "IT", studentyear: "1st"})
    res.json(stuIT1);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 4 : Get all the Students - Year: 1st and Branch='EE' . Login required

router.get("/fetch1EE",  async (req, res) => {
  try {
    const stuEE1 = await eventRegistration.find({studentbranch: "EE", studentyear: "1st"})
    res.json(stuEE1);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 5 : Get all the Students - Year: 1st and Branch='ECE' . Login required

router.get("/fetch1ECE",  async (req, res) => {
  try {
    const stuECE1 = await eventRegistration.find({studentbranch: "ECE", studentyear: "1st"})
    res.json(stuECE1);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 6 : Get all the Students - Year: 1st and Branch='BT' . Login required

router.get("/fetch1BT",  async (req, res) => {
  try {
    const stuBT1 = await eventRegistration.find({studentbranch: "BT", studentyear: "1st"})
    res.json(stuBT1);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 7 : Get all the Students - Year: 1st and Branch='AG' . Login required

router.get("/fetch1AG",  async (req, res) => {
  try {
    const stuAG1 = await eventRegistration.find({studentbranch: "AG", studentyear: "1st"})
    res.json(stuAG1);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 8 : Get all the Students - Year: 1st and Branch='CE' . Login required

router.get("/fetch1CE",  async (req, res) => {
  try {
    const stuCE1 = await eventRegistration.find({studentbranch: "CE", studentyear: "1st"})
    res.json(stuCE1);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 9 : Get all the Students - Year: 1st and Branch='ME' . Login required

router.get("/fetch1ME",  async (req, res) => {
  try {
    const stuME1 = await eventRegistration.find({studentbranch: "ME", studentyear: "1st"})
    res.json(stuME1);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});


//Route 2 : Get all the Students - Year: 2nd and Branch='CS' . Login required

router.get("/fetch2CS",  async (req, res) => {
  try {
    const stuCS2 = await eventRegistration.find({studentbranch: "CS", studentyear: "2nd"})
    res.json(stuCS2);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});


//Route 3 : Get all the Students - Year: 2nd and Branch='IT' . Login required

router.get("/fetch2IT",  async (req, res) => {
  try {
    const stuIT2 = await eventRegistration.find({studentbranch: "IT", studentyear: "2nd"})
    res.json(stuIT2);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 4 : Get all the Students - Year: 2nd and Branch='EE' . Login required

router.get("/fetch2EE",  async (req, res) => {
  try {
    const stuEE2 = await eventRegistration.find({studentbranch: "EE", studentyear: "2nd"})
    res.json(stuEE2);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 5 : Get all the Students - Year: 2nd and Branch='ECE' . Login required

router.get("/fetch2ECE",  async (req, res) => {
  try {
    const stuECE2 = await eventRegistration.find({studentbranch: "ECE", studentyear: "2nd"})
    res.json(stuECE2);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 6 : Get all the Students - Year: 2nd and Branch='BT' . Login required

router.get("/fetch2BT",  async (req, res) => {
  try {
    const stuBT2 = await eventRegistration.find({studentbranch: "BT", studentyear: "2nd"})
    res.json(stuBT2);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 7 : Get all the Students - Year: 2nd and Branch='AG' . Login required

router.get("/fetch2AG",  async (req, res) => {
  try {
    const stuAG2 = await eventRegistration.find({studentbranch: "AG", studentyear: "2nd"})
    res.json(stuAG2);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 8 : Get all the Students - Year: 2nd and Branch='CE' . Login required

router.get("/fetch2CE",  async (req, res) => {
  try {
    const stuCE2 = await eventRegistration.find({studentbranch: "CE", studentyear: "2nd"})
    res.json(stuCE2);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 9 : Get all the Students - Year: 2nd and Branch='ME' . Login required

router.get("/fetch2ME",  async (req, res) => {
  try {
    const stuME2 = await eventRegistration.find({studentbranch: "ME", studentyear: "2nd"})
    res.json(stuME2);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//3rd year Student

//Route 2 : Get all the Students - Year: 3rd and Branch='CS' . Login required

router.get("/fetch3CS",  async (req, res) => {
  try {
    const stuCS3 = await eventRegistration.find({studentbranch: "CS", studentyear: "3rd"})
    res.json(stuCS3);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});


//Route 3 : Get all the Students - Year: 2nd and Branch='IT' . Login required

router.get("/fetch3IT",  async (req, res) => {
  try {
    const stuIT3 = await eventRegistration.find({studentbranch: "IT", studentyear: "3rd"})
    res.json(stuIT3);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 4 : Get all the Students - Year: 2nd and Branch='EE' . Login required

router.get("/fetch3EE",  async (req, res) => {
  try {
    const stuEE3 = await eventRegistration.find({studentbranch: "EE", studentyear: "3rd"})
    res.json(stuEE3);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 5 : Get all the Students - Year: 3rd and Branch='ECE' . Login required

router.get("/fetch2ECE",  async (req, res) => {
  try {
    const stuECE3 = await eventRegistration.find({studentbranch: "ECE", studentyear: "3rd"})
    res.json(stuECE3);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 6 : Get all the Students - Year: 2nd and Branch='BT' . Login required

router.get("/fetch3BT",  async (req, res) => {
  try {
    const stuBT3 = await eventRegistration.find({studentbranch: "BT", studentyear: "3rd"})
    res.json(stuBT3);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 7 : Get all the Students - Year: 3rd and Branch='AG' . Login required

router.get("/fetch3AG",  async (req, res) => {
  try {
    const stuAG3 = await eventRegistration.find({studentbranch: "AG", studentyear: "3rd"})
    res.json(stuAG3);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 8 : Get all the Students - Year: 3rd and Branch='CE' . Login required

router.get("/fetch3CE",  async (req, res) => {
  try {
    const stuCE3 = await eventRegistration.find({studentbranch: "CE", studentyear: "3rd"})
    res.json(stuCE3);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 9 : Get all the Students - Year: 3rd and Branch='ME' . Login required

router.get("/fetch3ME",  async (req, res) => {
  try {
    const stuME3 = await eventRegistration.find({studentbranch: "ME", studentyear: "3rd"})
    res.json(stuME3);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//4th Sudents

//Route 2 : Get all the Students - Year: 4th and Branch='CS' . Login required

router.get("/fetch4CS",  async (req, res) => {
  try {
    const stuCS4 = await eventRegistration.find({studentbranch: "CS", studentyear: "4th"})
    res.json(stuCS4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});


//Route 3 : Get all the Students - Year: 4th and Branch='IT' . Login required

router.get("/fetch4IT",  async (req, res) => {
  try {
    const stuIT4 = await eventRegistration.find({studentbranch: "IT", studentyear: "4th"})
    res.json(stuIT4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 4 : Get all the Students - Year: 2nd and Branch='EE' . Login required

router.get("/fetch4EE",  async (req, res) => {
  try {
    const stuEE4 = await eventRegistration.find({studentbranch: "EE", studentyear: "4th"})
    res.json(stuEE4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 5 : Get all the Students - Year: 4th and Branch='ECE' . Login required

router.get("/fetch4ECE",  async (req, res) => {
  try {
    const stuECE4 = await eventRegistration.find({studentbranch: "ECE", studentyear: "4th"})
    res.json(stuECE4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 6 : Get all the Students - Year: 4th and Branch='BT' . Login required

router.get("/fetch4BT",  async (req, res) => {
  try {
    const stuBT4 = await eventRegistration.find({studentbranch: "BT", studentyear: "4th"})
    res.json(stuBT4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 7 : Get all the Students - Year: 4th and Branch='AG' . Login required

router.get("/fetch4AG",  async (req, res) => {
  try {
    const stuAG4 = await eventRegistration.find({studentbranch: "AG", studentyear: "4th"})
    res.json(stuAG4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 8 : Get all the Students - Year: 2nd and Branch='CE' . Login required

router.get("/fetch4CE",  async (req, res) => {
  try {
    const stuCE4 = await eventRegistration.find({studentbranch: "CE", studentyear: "4th"})
    res.json(stuCE4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 9 : Get all the Students - Year: 4th and Branch='ME' . Login required

router.get("/fetch4ME",  async (req, res) => {
  try {
    const stuME4 = await eventRegistration.find({studentbranch: "ME", studentyear: "4th"})
    res.json(stuME4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});





//Route 26 : Get all the Students - Year: 4th and Branch='CS' using : Get (/api/event/fetchallevents). Login required

router.get("/fetch4CS",  async (req, res) => {
  try {
    const stuCS4 = await eventRegistration.find({studentbranch: "CS", studentyear: "4th"})
    res.json(stuCS4);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;