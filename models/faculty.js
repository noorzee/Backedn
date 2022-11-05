const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
    facultyCode: {
        type: String,
        required: true,
        unique: true
      },
      facultyName: {
        type: String,
        required: true,
        unique: true
      }
});

module.exports = mongoose.model("Faculty", facultySchema);
