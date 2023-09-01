const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const fetchuser = require('../middleware/fetchuser')
// const fetchcategory = require('../middleware/fetchcategory')
// const fetchsponser = require('../middleware/fetchsponser')
const Category = require("../model/Category")
const Sponser = require("../model/Sponser")
const Event = require("../model/Event")
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Abhiisgoodb@oy'


// fetch category || Method : GET

router.get('/category/fetchcategory',fetchuser, async (req,res)=>{
    let success = false
    try {
        const category = await Category.find({user:req.user.id})
        success = true
        res.json({success,category})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})


// add category || Method : POST

router.post('/category/addcategory',fetchuser,[
    // check validation here...
    body('categoryname','category name should be 6 to 8 character').isLength({min:4})
], async (req,res)=>{
    let success = false
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({'error':errors.array()})
    }
    try {
        const {categoryname,categorydescription}=req.body
        const category = new Category({
            categoryname,categorydescription,user : req.user.id
        })
        let saveCategory = await category.save()
        saveCategory = {
            category: {
                id: category.id
            }
        }
        const categoryData = jwt.sign(saveCategory,JWT_SECRET)
        success = true
        res.json({success,categoryData})
        // res.json(categoryData)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})


//update category || Method : PUT

router.put('/category/updatecategory/:id',fetchuser, async (req,res)=>{
    let success = false
    try {
        const {categoryname,categorydescription} = req.body
        const newCategory = {}
        if(categoryname){ newCategory.categoryname = categoryname}
        if(categorydescription){ newCategory.categorydescription = categorydescription}

        let category = await Category.findById(req.params.id)
        if(!category){
            return res.status(404).send("Not found")
        }
        if(category.user.toString() !== req.user.id){
            return res.status(401).send('Not allowed')
        }
        success = true
        category = await Category.findByIdAndUpdate(req.params.id,{$set:newCategory},{new:true})
        console.log(category)
        res.json({success,category})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})


//delete category || Method : DELETE

router.delete('/category/deletecategory/:id',fetchuser, async (req,res)=>{
    try {
        let category = await Category.findById(req.params.id)
        if(!category){
            return res.status(404).send("Not found")
        }
        if(category.user.toString() !== req.user.id){
            return res.status(401).send('Not allowed')
        }

        category = await Category.findByIdAndDelete(req.params.id)
        res.json({"success" : "category has been deleted",category:category})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

// fetch sponser || Method : GET

router.get('/sponser/fetchsponser',fetchuser, async (req,res)=>{
    let success = false
    try {
        const sponser = await Sponser.find({user:req.user.id})
        success = true
        res.json({success,sponser})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

// add sponser || Method : get

router.post('/sponser/addsponser',fetchuser,[
    // check validation here...
    body('sponserName','sponser name can not be blank').exists(),
], async (req,res)=>{
    let success = false
    const errors=validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({'error':errors.array()})
    }
    try {
        const {sponserName,sponserLogo,sponserDetail}=req.body
        const sponser = new Sponser({
            sponserName,sponserLogo,sponserDetail,user:req.user.id
        })
        let saveSponser = await sponser.save()
        saveSponser = {
            sponser: {
                id: sponser.id
            }
        }
        const sponserData = jwt.sign(saveSponser,JWT_SECRET)
        success = true
        res.json({success,sponserData})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

// update sponser || Method : PUT

router.put('/sponser/updatesponser/:id',fetchuser, async(req,res)=>{
    let success = false
    try {
        const {sponserName,sponserLogo,sponserDetail} = req.body
        const newSponser = {}
        if(sponserName){newSponser.sponserName = sponserName}
        if(sponserLogo){newSponser.sponserLogo = sponserLogo}
        if(sponserDetail){newSponser.sponserDetail = sponserDetail}

        let sponser = await Sponser.findById(req.params.id)
        if(!sponser){
            return res.status(404).send("Not found")
        }
        if(sponser.user.toString() !== req.user.id){
            return res.status(401).send('Not allowed')
        }
        success = true
        sponser = await Sponser.findByIdAndUpdate(req.params.id,{$set:newSponser},{new:true})
        res.json({success,sponser})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

// delete sponser || Method : DELETE

router.delete('/sponser/deletesponser/:id',fetchuser, async (req,res)=>{
    try {
        let sponser = await Sponser.findById(req.params.id)
        if(!sponser){
            return res.status(404).send("Not found")
        }
        if(sponser.user.toString() !== req.user.id){
            return res.status(401).send('Not allowed')
        }

        sponser = await Sponser.findByIdAndDelete(req.params.id)
        res.json({"success" : "sponser has been deleted",sponser:sponser})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})


// fetch event || Method : GET

router.get('/fetchevent',fetchuser, async (req,res)=>{
    let success = false
    try {
        success = true
        const event = await Event.find({user:req.user.id})
        res.json({success,event})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:"Internal server error"})
    }
})

// add event || Method : POST

router.post('/addevent',fetchuser, async (req,res,next)=>{
    const categoryid = req.header('categoryid')
    try {
        // const category = jwt.verify(categoryid, JWT_SECRET)
        // req.category = category.category
        req.category = categoryid
        // console.log('hello from category')
        console.log(req.category)
        next();
    } catch (error) {
        // console.log("error",error.message)
        // res.status(401).send({ error: "some error occured in sponser" })
        return res.status(401).send({ error: "Please authenticate using a valid token" })
    }
})
router.post('/addevent', async (req,res,next)=>{
    const sponserid = req.header('sponserid')
    try {
        // const sponser = jwt.verify(sponserid, JWT_SECRET)
        // req.sponser = sponser.sponser
        req.sponser = sponserid
        // console.log('hello from sponser')
        next();
    } catch (error) {
        res.status(401).send({ error: "some error occured in sponser" })
    }
})
router.post('/addevent',
[
    // check validation here...
    body('eventName','name must be 6 to 7 character').isLength({min:1}),
    body('contact','contact number must be 10 digit').isLength({min:10,max:10})],
     async (req,res)=>{
    const errors=validationResult(req);
    let success = false
    if (!errors.isEmpty()) {
        console.log('validation')
        console.log(errors.array())
        return res.status(400).json({'error':errors.array()})
    }
    try {
        const {eventName,eventDescription,eventLocation,eventStDate,eventEndDate,contact,image,noOfTicket,totalPrice} = req.body
        let event = new Event({
            eventName,eventDescription,eventLocation,eventStDate,eventEndDate,contact,image,noOfTicket,totalPrice,user : req.user.id ,
            category : req.category,
            sponser :  req.sponser 
        })
        const saveEvent = await event.save()
        success = true
        res.json({success,saveEvent})
        // console.log('hello from event')
    } catch (error) {
        console.log("error:",error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

router.put('/updateevent/:id',fetchuser,async (req,res,next)=>{
    const categoryid = req.header('categoryid')
    // console.log("hello from the fetchcaetgory")
    try {
        // const category = jwt.verify(categoryid, JWT_SECRET)
        // req.category = category.category
        req.category = categoryid
        next();
    } catch (error) {
        console.log('error in fetchctegory:',error)
        res.status(401).send({ error: "some error occured in sponser" })
    }
})
router.put('/updateevent/:id',async (req,res,next)=>{
    // console.log('hello from the fetchsponser')
    const sponserid = req.header('sponserid')
    try {
        // const sponser = jwt.verify(sponserid, JWT_SECRET)
        // req.sponser = sponser.sponser
        req.sponser = sponserid
        next();
    } catch (error) {
        console.log('error in fetchsponser:',error)
        res.status(401).send({ error: "some error occured in sponser" })
    }
})

router.put('/updateevent/:id', async (req,res)=>{
    let success = false
    try {
        console.log("hello from update event")
        const {eventName,eventDescription,eventLocation,eventStDate,eventEndDate,contact,image,noOfTicket,totalPrice} = req.body
        const newEvent = {}
        if(eventName){ newEvent.eventName = eventName}
        if(eventDescription){ newEvent.eventDescription = eventDescription}
        if(eventLocation){ newEvent.eventLocation = eventLocation}
        if(eventStDate){ newEvent.eventStDate = eventStDate}
        if(eventEndDate){ newEvent.eventEndDate = eventEndDate}
        if(contact){ newEvent.contact = contact}
        if(image){newEvent.image = image}
        if(noOfTicket){ newEvent.noOfTicket = noOfTicket}
        if(totalPrice){ newEvent.totalPrice = totalPrice}
        newEvent.category = req.category
        newEvent.sponser = req.sponser

        let event = await Event.findById(req.params.id)
        if(!event){
            return res.status(404).send("Not found")
        }
        if(event.user.toString() !== req.user.id){
            return res.status(401).send('Not allowed')
        }
        event = await Event.findByIdAndUpdate(req.params.id,{$set:newEvent},{new:true})
        // console.log(event)
        success = true
        res.json({success,event})
        return event
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error in edit"})
    }
})

// delete event || Method : DELETE

router.delete('/deleteevent/:id',fetchuser, async (req,res)=>{
    try {
        let event = await Event.findById(req.params.id)
        if(!event){
            return res.status(404).send("Not found")
        }
        if(event.user.toString() !== req.user.id){
            return res.status(401).send('Not allowed user')
        }
        event = await Event.findByIdAndDelete(req.params.id)
        res.json({"success" : "event has been deleted",event:event})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

// event image

router.post('/uploadeventimage/:id',fetchuser,async(req,res)=>{
    const {base64} = req.body
    try {
        const image = await Event.findByIdAndUpdate(req.params.id,{image:base64})
        res.send(image)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router