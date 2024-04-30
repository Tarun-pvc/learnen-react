const express = require('express')
const { registerUser, loginUser, logoutUser , updateUser,getUserDetails,getParticipantsByCourse } = require('../controllers/userController')
const { getDashboard } = require('../controllers/dashboard')
const { adminRoomList, buyCourse, getCourses,getCourse, getExploreCourses , addRoom , getCreatedCourses,getJoinedCourses } = require('../controllers/roomController')
const {createAssignment, getAssignments,getAssignmentsByCourse,getAssignmentsJoined} = require('../controllers/assignmentsController')
const {addResource, getResourcesByCourse,getresourcesJoined} = require('../controllers/resourceControllers')
const {addSchedule,getScheduleByCourse,getSchedule}=require("../controllers/scheduleController");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

const router = express.Router();

router.post("/signup", registerUser);
router.get("/adminRooms", adminRoomList);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get('/dashboard', getDashboard);
router.get('/usercourses', getCourses);
router.get('/getCourse', getCourse);
router.get('/explorecourses', getExploreCourses);
router.post('/buycourse', buyCourse);
router.post('/addroom', addRoom);
router.post('/getcreatedcourses', getCreatedCourses);
router.post('/getjoinedcourses', getJoinedCourses);
router.post('/updateuser', upload.single("profileImage"), (req, res, next) => {
    req.fileName = req.file.filename;
    next();
}, updateUser);
router.post('/addassignment', createAssignment);
router.get('/getassignments', getAssignments);
router.post('/getcourseassignments', getAssignmentsByCourse);
router.post('/getAssignmentsJoined', getAssignmentsJoined);
router.post('/addresource', addResource);
router.post('/getresources', getResourcesByCourse);
router.post('/getresourcesJoined', getresourcesJoined);
router.post('/addschedule', addSchedule);
router.post('/getSchedulesByCourse', getScheduleByCourse);
router.post('/getSchedule',getSchedule)
router.post('/getParticipants',getParticipantsByCourse);
router.get('/getupdateuser', getUserDetails);



module.exports = router;