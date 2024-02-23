const express = require('express')
const { registerUser, loginUser, logoutUser , updateUser,getUserDetails } = require('../controllers/userController')
const { getDashboard } = require('../controllers/dashboard')
const { adminRoomList, buyCourse, getCourses,getCourse, getExploreCourses , addRoom , getCreatedCourses } = require('../controllers/roomController')
const {createAssignment, getAssignments} = require('../controllers/assignmentsController')
const {createResource, getResources} = require('../controllers/resourceController')
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
router.post('/updateuser', upload.single("profileImage"), (req, res, next) => {
    req.fileName = req.file.filename;
    next();
}, updateUser);
router.post('/addassignment', createAssignment);
router.get('/getassignments', getAssignments);
router.post('/addresource', createResource);
router.get('/getresources', getResources);
router.get('/getupdateuser', getUserDetails);



module.exports = router;