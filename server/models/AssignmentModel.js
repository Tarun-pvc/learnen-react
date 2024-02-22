const mongoose = require('mongoose')

const AssignmentModel = new mongoose.Schema({
    title: {
        type:String
    },
    description:{
        type:String
    },
    link:{
        type:String
    }
})

const Assignment = mongoose.model('Assignment',AssignmentModel);
module.exports = Assignment;