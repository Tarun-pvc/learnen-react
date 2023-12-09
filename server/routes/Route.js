const express = require('express')
const { registerUser, loginUser, logoutUser } = require('../controllers/userController')
const { getDashboard } = require('../controllers/dashboard')
const { adminRoomList, buyCourse, getCourses, getExploreCourses , addRoom , getCreatedCourses } = require('../controllers/roomController')
const router = express.Router();

router.post("/signup", registerUser);
router.get("/adminRooms", adminRoomList);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get('/dashboard', getDashboard);
router.get('/usercourses', getCourses);
router.get('/explorecourses', getExploreCourses);
router.post('/buycourse', buyCourse);
router.post('/addroom', addRoom);
router.post('/getcreatedcourses', getCreatedCourses);


module.exports = router;