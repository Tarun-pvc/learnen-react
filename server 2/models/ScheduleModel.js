const mongoose = require('mongoose')

const ScheduleModel = new mongoose.Schema({
    title: {
        type:String
    },
    time:{
        type:String
    },
    link:{
        type:String
    }
})

const Schedule = mongoose.model('Schedule',ScheduleModel);
module.exports = Schedule;