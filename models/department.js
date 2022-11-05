const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const departmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true,
        unique: true
      },
      departmentCode: {
        type: String,
        required: true,
        unique: true
      },
      facultyId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'facultySchema'
      }
});

module.exports = mongoose.model("Department", departmentSchema);
