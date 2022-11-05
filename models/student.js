var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'userSchema'
  },
  studentId: {
    type: String,
    required: true
  },
  degreeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'degreeSchema'
  },
  studentName: {
    type: String,
    required: true
  },
  studentEmail: {
    type: Boolean,
    required: true
  },
  degreeId: {
    type: Boolean,
    required: true
  },
  regYear: {
    type: Date,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  subjects: {
    assignmentMarks: {
      type: Number,
      required: true
    },
    examMarks: {
      type: Number,
      required: true
    },
    finalGrade: {
      type: String,
      required: true
    },
    approve: {
      type: Boolean,
      required: true
    },
    semester: {
      type: Number,
      required: true
    },
    subjectId: {
      type: subjectSchema,
      required: true
    }
  }
});