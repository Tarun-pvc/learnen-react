const mongoose = require('mongoose')

const ResourceModel = new mongoose.Schema({
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

const Resource = mongoose.model('Resource',ResourceModel);
module.exports = Resource;