const Assignment =require('../models/AssignmentModel');
const Room=require('../models/RoomModel');

const createAssignment = async (req, res, next) => {
    const { title, deadline, link, courseId } = req.body;
    try {
        const assignment = new Assignment({
            title,
            deadline,
            link,
        });

        const room = await Room.findById(courseId);
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }

        room.assignment.push(assignment);
        await room.save();
        await assignment.save();

        res.status(201).json({ message: "Assignment created successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not create assignment" });
        next(err);
    }
}

const getAssignments = async (req, res, next) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json({ assignments: assignments });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not fetch assignments" });
        next(err);
    }
}
const getAssignmentsByCourse = async (req, res, next) => {
    try {
        
        const {  courseId } = req.body;

        const room= await Room.findById(courseId);
        const roomAssignments =room.assignment;
        const assignments = await Assignment.find({_id:{ $in: roomAssignments }});
        res.status(200).json({ assignments: assignments });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not fetch assignments" });
        next(err);
    }
}

const getAssignmentsJoined = async (req, res, next) => {
    try {
        const { joinedRooms } = req.body;

        // Assuming Room is your Mongoose model for rooms
        const assignments = await Promise.all(joinedRooms.map(async (roomId) => {
            const room = await Room.findById(roomId);
            if (!room) {
                throw new Error(`Room with id ${roomId} not found`);
            }
            const roomAssignments = room.assignment;
            return Assignment.find({ _id: { $in: roomAssignments } });
        }));

        res.status(200).json({ assignments: assignments.flat() });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not fetch assignments" });
        next(err);
    }
}

module.exports = {
    createAssignment,
    getAssignments,
    getAssignmentsByCourse,
    getAssignmentsJoined
}
