const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const EventRegistration = require("../modals/RegisterEvent");
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");


  
//Route 1 : REgister a  event : POST (/api/event/registerEvent). Login require

router.post(
    "/registerEvent",
    fetchuser,
    async (req, res) => {
      try {
        const {studentname,studentrollno,studentemail,studentbranch,studentyear,studentmobile,eventname} = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        // Convert student year to lowercase
        const lowercaseStudentYear = studentyear.toLowerCase();

        // Dynamically determine collection name based on student's year
        const collectionName = `Year_${lowercaseStudentYear}`;

         // Save student registration to the respective collection
         const EventRegistrationModel = mongoose.model(collectionName, EventRegistration);
        const register = new EventRegistrationModel({
          studentname,
          studentrollno,
          studentemail,
          studentbranch,
          studentyear,
          studentmobile,
          eventname,
          user: req.user.id,
        });
        const savedRegistration = await register.save();
        res.json(savedRegistration);
        console.log(savedRegistration);
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
      }
    }
);

module.exports = router;