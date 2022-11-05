const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// const Schema = mongoose.Schema;

const departmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true
      },
      departmentCode: {
        type: String,
        required: true,
        unique: true
      },
      facultyId: {
        type: ObjectId,
        required: true,
        ref: 'facultySchema'
      }
});

module.exports = mongoose.model("Department", departmentSchema);
