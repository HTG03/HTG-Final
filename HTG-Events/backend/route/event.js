const express = require("express");
const router = express.Router();
const Event = require("../modals/CreateEvent");
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");


//Route 1 : Get all the events using : Get (/api/event/fetchallevents). Login required

router.get("/fetchallevents", fetchuser, async (req, res) => {
    try {
      const notes = await Event.find({ user: req.user.id });
      res.json(notes);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  });

//Route 2 : Add a new event : POST (/api/event/addevent). Login require

router.post(
    "/addevent",
    fetchuser,
    async (req, res) => {
      try {
        const {eventname,eventdescription,eventdate,eventemail,eventPhone,eventaddress} = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const event = new Event({
          eventname,
          eventdescription,
          eventdate,
          eventemail,
          eventPhone,
          eventaddress,
          user: req.user.id,
        });
        const savedNote = await event.save();
        res.json(savedNote);
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
      }
    }
);

module.exports = router;