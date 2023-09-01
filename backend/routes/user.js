const express = require('express')
const router = express.Router()
const User = require('../model/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Abhiisgoodb@oy'

//create a user ||method:POST
router.post('/createuser',[
    // check validation here...
    body('email','Enter valid email').isEmail(),
    body('password','Enter valid password').isLength({min:8,max:12}),
    body('contactno','Enter valid phone number').isLength({min:10,max:10})
], async (req,res)=>{
    const error = validationResult(req)
    let success = false
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array() })
    }

    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password,salt)
    try{
        let user = await User.findOne({email:req.body.email})
        if(user){
            res.status(400).json({error:"Sorry email is already exists"})
        }

        user = await User.create({
            fname:req.body.fname,
            email:req.body.email,
            password:secPass,
            country:req.body.country,
            contactno:req.body.contactno,
            role:req.body.role
        })
        const data = {
            user: {
                id: user.id
            }
        }

        const jwtData = jwt.sign(data,JWT_SECRET)
        success = true
        res.json({success,jwtData})
    }catch(error){
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
    // res.send()
})

//user login ||method:POST
router.post('/login',[
    // check validation here...
    body('email','Enter a valid email').isEmail(),
    body('password','Password can not be blank').exists(),
],
async (req,res)=>{
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({error:"Sorry email is not found. You want to login?"})
        }
        let passwordCompare = await bcrypt.compare(req.body.password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error:"Sorry password is invalid"})
        }
        data = {
            user:{
                id:user.id
            }
        }
        const jwtData = jwt.sign(data,JWT_SECRET)
        success = true
        res.json({success,jwtData})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})

router.put('/updateuser/:id',fetchuser,async(req,res)=>{
    try {
        const {fname,lname,email,country,contactno,gender,detail,image} = req.body
        const newProfile = {}
        if(fname){newProfile.fname=fname}
        if(lname){newProfile.lname=lname}
        if(email){newProfile.email=email}
        if(country){newProfile.country = country}
        if(contactno){newProfile.contactno = contactno}
        if(gender){newProfile.gender = gender}
        if(detail){newProfile.detail=detail}
        if(image){newProfile.image = image}
        console.log(newProfile.image)
        let user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).send("Not found")
        }
        user = await User.findByIdAndUpdate(req.params.id,{$set:newProfile})
        res.json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})

//get user details ||method:GET
router.get("/getuser",async (req,res)=>{
    let success = false
    try {
        // let userId = req.user.id
        const user = await User.find().select('-password')
        success = true
        res.send({success,user})
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }

})

router.post('/uploadimage/:id',fetchuser,async(req,res)=>{
    const {base64} = req.body
    try {
        const image = await User.findByIdAndUpdate(req.params.id,{image:base64})
        res.send(image)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})
module.exports = router