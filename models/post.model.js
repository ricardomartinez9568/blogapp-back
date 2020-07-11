const mongoose = require('mongoose');


var postSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    date: {
        type: String
    },
    description: {
        type: String
    }
    
});