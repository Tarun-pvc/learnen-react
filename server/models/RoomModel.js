const mongoose = require('mongoose')

const RoomModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img:{
        type:String
    },
    description: {
        type: String,
        required: true
    },
    participants: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    }],
    mentor: {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    price:{
        type:String,
        required:true
    },
    meetlink:{
        type:String
    },
    skills:{
        type:[String]
    },
    stars:{
        type:String,
        default:4.5
    },
    assignment:[{
        assignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment'},
    }],
    resource:[{
        resource: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource'},
    }],
    schedule:[{
        schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule'},
    }],
    reports:[{type:mongoose.Schema.Types.ObjectId, ref:'Report'}]
})

const Room = mongoose.model('Room' , RoomModel);

module.exports = Room;