import mongoose, { mongo } from "mongoose";

const RoomModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    participants: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    }],
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    price:{
        type:String,
        required:true
    },
    meetlink:{
        type:String
    }
})

module.exports = mongoose.model('Room' , RoomModel);