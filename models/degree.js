const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schem

const degreeSchema = new mongoose.Schema({
    dgreeName: {
        type: String,
        required: true
      },
      departmentId: {
        type: ObjectId,
        required: true,
        ref: "Department"
      }
});

module.exports = mongoose.model("Degree", degreeSchema );
