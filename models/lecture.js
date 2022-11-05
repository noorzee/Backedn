const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const lectureSchema = new mongoose.Schema({
    lectureName:{
        type: String,
        maxlenght: 32,
        trim: true,
        required: true
    },
    lectureEmail:{
        type: String,
        maxlenght: 32,
        trim: true,
        required: true,
        unique: true
    },
    user:{
        type: ObjectId,
        ref: "User"
    },
    subject:{
        type: ObjectId,
        ref: "Subject"
    }
});

module.exports = mongoose.model("Lecture", lectureSchema);
