const express = require('express')
const {registerUser , loginUser} = require('../controllers/userController')
const {adminRoomList} = require('../controllers/roomController')
const router = express.Router();

router.post("/signup",registerUser);
router.get("/adminRooms",adminRoomList);
router.post("/login",loginUser);

module.exports= router;