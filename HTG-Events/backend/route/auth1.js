const express = require('express');
const router = express.Router();
const User = require('../modals/User1');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_Secret = "Hriteshisagoodb$oy";
var fetchuser = require('../middleware/fetchuser');

router.post('/createuser', [
    body('cllgname','Enter a valid name').isLength({ min: 5 }),
    body('cllgemail','Enter a valid email').isEmail(),
    body('address','Enter a valid address').isLength({ min: 5 }),
    body('password','Password must be atleast of 5 characters').isLength({ min: 5 }),
], async(req, res) => {
    let success = false;
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({success,errors: errors.array() });
}
try {
let user = await User.findOne({cllgemail: req.body.cllgemail})
if(user){
    return res.status(400).json({success, error:"Sorry the user with this email id already exists"});
}
user = await User.create({
    cllgname: req.body.cllgname,
    password: req.body.password,
    address : req.body.address,
    cllgemail: req.body.cllgemail,
})
const data = {
    user:{
        id: user.id
    }
}
        const authtoken=jwt.sign(data,JWT_Secret)
        success=true;
        res.json({success,authtoken});
}catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

//Route 2: Authenticate a user using: POST '/api/auth/login'. No login required
router.post('/login',[
    body('cllgemail','Enter a valid cllgemail').isEmail(),
    body('password','Password cannot be blank').isLength({ min: 5 }),
], async(req, res)=>{
    let success = false;
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({success,errors: errors.array() });
}
const {cllgemail, password} = req.body;
try {
    let user = await User.findOne({cllgemail})
    if(!user){
        return res.status(400).json({success, error: "Please login with correct credentials"});
    }
    
    if(!password){
        return res.status(400).json({success, error: "Please login with correct credentials"});
    }
    const data = {
        user:{
            id: user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_Secret)
    success = true;
    res.json({success,authtoken});
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error")
}
})

module.exports = router