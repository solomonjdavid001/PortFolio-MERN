const express = require("express");
const router = express.Router();
const users = require("../models/ContactMeModel"); 

router.post("/contact",async(req,res) => {
    const {name,email,topic,message} = req.body;

    if(!name || !email || !topic || !message) {
        res.status(404).send("Please fill the data");
    }

    try {

        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser) {
            res.status(404).send("this email exists");

        }
        else {
            const adduser = new users({
                name,email,topic,message
            });
    
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
            alert("Thanks for your feedback");
        }
    } catch(error) {
        res.status(404).send(error)
    }
    
})

module.exports = router;