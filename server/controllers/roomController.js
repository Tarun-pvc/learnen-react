const { mongoose } = require('mongoose');
const Room = require('../models/RoomModel');
const User = require('../models/UserModel');

const adminRoomList = async (req, res) => {
    console.log("Inside adminRoomList function");
    if (true) {
        try {
            const rooms = await Room.find().populate('mentor.user');
            console.log(rooms);

            const roomsWithMentors = await Promise.all(rooms.map(async (room) => {
                const mentor = room.mentor.user;
                const mentorDetails = await User.findById(mentor);

                return {
                    ...room.toObject(),
                    mentor: mentorDetails,
                };
            }));

            console.log(roomsWithMentors);
            const users = await User.find();
            res.status(200).json({ Rooms: roomsWithMentors, users: users });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Could not fetch rooms" });
        }
    } else {
        res.status(500).json({ error: "Not an admin" });
        return;
    }
};

module.exports = {
    adminRoomList,
};
