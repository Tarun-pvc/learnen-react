const Resource = require("../models/ResourceModel");
const Room = require("../models/RoomModel");


const addResource=async(req,res,next)=>{
    const {title,description,link,courseId}=req.body;

    try{
        const resource = new Resource({
            title,
            description,
            link
        })
        console.log("frontend",resource);
        const room = await Room.findById(courseId);
        if(!room){
            return res.status(404).json({ error: "Room not found" });
        }

        room.resource.push(resource);
        await room.save();
        await resource.save();

        res.status(201).json({ message: "Document added successfully" });
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ error: "Could not create document" });
        next(err);
    }
}

const getResourcesByCourse = async(req,res,next)=>{
    try{
        const {courseId} = req.body;

        const room = await Room.findById(courseId);
        const roomResources = await room.resource;
        const resources= await Resource.find({_id:{ $in: roomResources }});
        res.status(200).json({ resources: resources});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ error: "Could not fetch documents" });
        next(err);
    }
}

const getresourcesJoined = async (req, res, next) => {
    try {
        const { joinedRooms } = req.body;
        const resources = await Promise.all(joinedRooms.map(async (roomId) => {
            const room = await Room.findById(roomId);
            if (!room) {
                throw new Error(`Room with id ${roomId} not found`);
            }
            const roomResources = room.resource;
            return Resource.find({ _id: { $in: roomResources } });
        }));
        res.status(200).json({ resources: resources.flat() });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not fetch resources" });
        next(err);
    }
}


module.exports={
    addResource,
    getResourcesByCourse,
    getresourcesJoined
}