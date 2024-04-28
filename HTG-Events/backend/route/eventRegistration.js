const express = require("express");
const router = express.Router();
const eventRegistration = require("../modals/RegisterEvent");
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");


  
//Route 1 : REgister a  event : POST (/api/event/registerEvent). Login require

router.post(
    "/registerEvent",
    fetchuser,
    async (req, res) => {
      try {
        const {studentname,studentrollno,studentemail,studentmobile,eventname} = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const register = new eventRegistration({
          studentname,
          studentrollno,
          studentemail,
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