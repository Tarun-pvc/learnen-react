const mongoose = require("mongoose");

const ReportModel = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  userName: {
    type: String,
  },
  userId: {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  courseId: {
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  },
  courseName: {
    type: String,
  },
});

const Report = mongoose.model("Report", ReportModel);
module.exports = Report;
