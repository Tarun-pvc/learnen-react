import mongoose from "mongoose";

const AssignmentModel = new mongoose.Schema({
    title: {
        type:String
    },
    description:{
        type:String
    }
})

const Assignment = mongoose.model('Assignment',AssignmentModel);
module.exports = Assignment;