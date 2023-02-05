const ContactMeModel = require('../models/ContactMeModel')
const ContactMeMode = require('../models/ContactMeModel')

module.exports.getContactMe = async(req,res) => {
    const ContactMe = await ContactMeModel.find()
    res.send(ContactMe)
}

module.exports.saveContactMe = async(req,res) => {
    const {text} =req.body

    ContactMeModel
    .create({text})
    .then((data) => {
        console.log("Addded successfully");
        console.log(data)
        res.send(data)
    })
}