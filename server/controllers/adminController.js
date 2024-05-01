const User = require("../models/UserModel");
const Room = require('../models/RoomModel');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Could not get users" });
    next(err);
  }
};

const getUserName = async (req, res, next) => {
    try {
      const userid = req.body.userid;
      
      const user = await User.findById(userid);
      if (!user) {
        throw new Error("User not found");
      }
      res.status(200).json(user.userName); 
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Could not get user name" });
      next(err);
    }
  };

  const deleteUser = async (req, res, next) => {
    try {
      const userid = req.body.userid;
      const user = await User.deleteOne({ _id: userid });
      if (user.deletedCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Could not delete user" });
      next(err);
    }
  };

  const deleteCourse= async (req, res, next) => {
    try {
      const roomid = req.body.roomid;
      const room = await Room.deleteOne({ _id: roomid });
      if (room.deletedCount === 0) {
        return res.status(404).json({ error: "room not found" });
      }
      res.status(200).json({ message: "room deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Could not delete room" });
      next(err);
    }
  };
  

module.exports = {
  getUsers,
  getUserName,
  deleteUser,
  deleteCourse
};
