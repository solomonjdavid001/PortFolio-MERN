const mongoose = require('mongoose')

const ContactMeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    topic: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ContactMe', ContactMeSchema);
