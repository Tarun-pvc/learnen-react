import mongoose from "mongoose";

const ReportModel = new mongoose.Schema({
    title: {
        type:String
    },
    description:{
        type:String
    }
})

const Report = mongoose.model('Report',ReportModel);
module.exports = Report;