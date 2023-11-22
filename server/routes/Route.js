const express = require('express')
const {registerUser} = require('../controllers/userController')
const {adminRoomList} = require('../controllers/roomController')
const router = express.Router();

router.post("/signup",registerUser);
router.get("/adminRooms",adminRoomList);

module.exports= router;