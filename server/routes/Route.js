const express = require('express')
const { registerUser, loginUser, logoutUser , updateUser,getUserDetails,getParticipantsByCourse } = require('../controllers/userController')
const { getDashboard } = require('../controllers/dashboard')
const { adminRoomList, buyCourse, getCourses,getCourse, getExploreCourses , addRoom , getCreatedCourses,getJoinedCourses,submitReports,getReports } = require('../controllers/roomController')
const {createAssignment, getAssignments,getAssignmentsByCourse,getAssignmentsJoined} = require('../controllers/assignmentsController')
const {addResource, getResourcesByCourse,getresourcesJoined} = require('../controllers/resourceControllers')
const {addSchedule,getScheduleByCourse,getSchedule}=require("../controllers/scheduleController");
const {getUsers,getUserName,deleteUser,deleteCourse}=require("../controllers/adminController");
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

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               signupname:
 *                 type: string
 *               signupemail:
 *                 type: string
 *               signuppass:
 *                 type: string
 *               phonenumber:
 *                 type: string
 *               securityquestion:
 *                 type: string
 *               securityanswer:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       500:
 *         description: Internal server error
 */
router.post("/signup", registerUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     description: Authenticate a user by email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '201':
 *         description: User authenticated successfully
 *       '400':
 *         description: Incorrect email or password provided
 *       '500':
 *         description: Internal server error
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logout user
 *     description: Logout the currently authenticated user.
 *     responses:
 *       '200':
 *         description: User logged out successfully
 *       '500':
 *         description: Internal server error
 */
router.get("/logout", logoutUser);

/**
 * @swagger
 * /updateuser:
 *   post:
 *     summary: Update user details
 *     description: Update the details of the currently authenticated user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               bio:
 *                 type: string
 *               acQua:
 *                 type: string
 *               linkedIn:
 *                 type: string
 *               portfolio:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User details updated successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post('/updateuser', upload.single("profileImage"), (req, res, next) => {
    req.fileName = req.file.filename;
    next();
}, updateUser);

/**
 * @swagger
 * /getupdateuser:
 *   get:
 *     summary: Get user details by ID
 *     description: Retrieve details of a user by their ID.
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve details for
 *     responses:
 *       '200':
 *         description: User details retrieved successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get('/getupdateuser', getUserDetails);

/**
 * @swagger
 * /getParticipants:
 *   post:
 *     summary: Get participants by course ID
 *     description: Retrieve participants of a course by its ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *             required:
 *               - courseId
 *     responses:
 *       '200':
 *         description: Participants retrieved successfully
 *       '404':
 *         description: Room not found
 *       '500':
 *         description: Internal server error
 */
router.post('/getParticipants',getParticipantsByCourse);

/**
 * @swagger
 * /adminRooms:
 *  get:
 *      summary: Get all rooms
 *      description: Retrieve a list of all rooms.
 *      responses:
 *          '200':
 *              description: Rooms retrieved successfully
 *          '500':
 *              description: Internal server error
 *          '404':
 *              description: Rooms not found
 */
router.get("/adminRooms", adminRoomList);

/**
 * @swagger
 * /buycourse:
 *   post:
 *     summary: Buy a course
 *     description: Buy a course and add the user to the course participants list and the course to the user's joined courses list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user buying the course.
 *               roomId:
 *                 type: string
 *                 description: The ID of the room (course) being bought.
 *     responses:
 *       '200':
 *         description: Course added successfully
 *       '400':
 *         description: User already in course or invalid request
 *       '404':
 *         description: Room or User not found
 *       '500':
 *         description: Internal server error
 */
router.post('/buycourse', buyCourse);

/**
 * @swagger
 * /getCourse:
 *  get:
 *     summary: Get course by ID
 *     description: Retrieve a course by its ID.
 *     parameters:
 *        - in: query
 *          name: courseId
 *          required: true
 *          schema:
 *              type: string
 *              description: The ID of the course to retrieve
 *     responses:
 *         '200':
 *            description: Course retrieved successfully
 *         '404':
 *            description: Course not found
 *         '500':
 *            description: Internal server error
 */
router.get('/getCourse', getCourse);

/**
 * @swagger
 * /explorecourses:
 *  get:
 *     summary: Explore courses
 *     description: Retrieve a list of all courses.
 *     responses:
 *        '200':
 *           description: Courses retrieved successfully
 *        '404':
 *           description: Courses not found
 *        '500':
 *           description: Internal server error
 */
router.get('/explorecourses', getExploreCourses);

/**
 * @swagger
 * /addroom:
 *  post:
 *     summary: Add a new room
 *     description: Add a new room (course) to the database.
 *     requestBody:
 *       required: true
 *       content:
 *        multipart/form-data:
 *         schema:
 *          type: object
 *         properties:
 *          roomTitle:
 *              type: string
 *              description: The title of the room (course).
 *          price:
 *              type: string
 *              description: The price of the room (course).
 *          meetLink:
 *              type: string
 *              description: The meeting link for the room (course).
 *          skills:
 *              type: string
 *              description: The skills required for the room (course).
 *          description:
 *              type: string
 *              description: The description of the room (course).
 *          userId:
 *              type: string
 *              description: The ID of the user creating the room (course).
 *          profileImage:
 *              type: file
 *              description: The image of the room (course).
 *     responses:
 *       '200':
 *         description: Room added successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post('/addroom', addRoom);

/**
 * @swagger
 * /getcreatedcourses:
 *  post:
 *    summary: Get created courses
 *    description: Retrieve a list of courses created by a user.
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *           userId:
 *            type: string
 *            description: The ID of the user to retrieve courses for
 *    responses:
 *      '200':
 *          description: Courses retrieved successfully
 *      '404':
 *          description: User not found
 *      '500':
 *          description: Internal server error
 */
router.post('/getcreatedcourses', getCreatedCourses);

/**
 * @swagger
 * /getjoinedcourses:
 *  post:
 *   summary: Get joined courses
 *   description: Retrieve a list of courses joined by a user.
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *          schema:
 *              type: object
 *              properties:
 *                 userId:
 *                    type: string
 *                    description: The ID of the user to retrieve courses for
 *   responses:
 *     '200':
 *        description: Courses retrieved successfully
 *     '404':
 *        description: User not found
 *     '500':
 *        description: Internal server error
 */
router.post('/getjoinedcourses', getJoinedCourses);

/**
 * @swagger
 * /getUsers:
 *  get:
 *      summary: Get all users
 *      description: Retrieve a list of all users.
 *      responses:
 *          '200':
 *              description: Users retrieved successfully
 *          '500':
 *              description: Internal server error
 *          '404':
 *              description: Users not found
 */
router.get('/getUsers', getUsers);

/**
 * @swagger
 * /getUserName:
 *  post:
 *      summary: Get user name by ID
 *      description: Retrieve the name of a user by their ID.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userid:
 *                              type: string
 *                              description: The ID of the user to retrieve the name for
 *      responses:
 *          '200':
 *              description: User name retrieved successfully
 *          '404':
 *              description: User not found
 *          '500':
 *              description: Internal server error
 */
router.post('/getUserName', getUserName);

/**
 * @swagger
 * /deleteUser:
 *  post:
 *      summary: Delete a user
 *      description: Delete a user from the database.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userid:
 *                              type: string
 *                              description: The ID of the user to delete
 *      responses:
 *          '200':
 *              description: User deleted successfully
 *          '404':
 *              description: User not found
 *          '500':
 *              description: Internal server error
 */
router.post('/deleteUser',deleteUser);

/**
 * @swagger
 * /deleteCourse:
 *  post:
 *     summary: Delete a course
 *     description: Delete a course from the database.
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *               roomid:
 *                 type: string
 *                 description: The ID of the course to delete
 *     responses:
 *       '200':
 *         description: Course deleted successfully
 *       '404':
 *         description: Course not found
 *       '500':
 *         description: Internal server error
 */
router.post('/deleteCourse',deleteCourse);

/**
 * @swagger
 * /addassignment:
 *  post:
 *     summary: Create a new assignment
 *     description: Create a new assignment and add it to a course.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          properties:
 *           courseId:
 *              type: string
 *              description: The ID of the course to add the assignment to
 *           title:
 *              type: string
 *              description: The title of the assignment
 *           deadline:
 *              type: string
 *              description: The deadline of the assignment
 *           link:
 *              type: string
 *              escription: The link to the assignment
 *     responses:
 *       '201':
 *         description: Assignment created successfully
 *       '404':
 *         description: Room not found
 *       '500':
 *         description: Internal server error
 */
router.post('/addassignment', createAssignment);

/**
 * @swagger
 * /getassignments:
 *  get:
 *    summary: Get all assignments
 *    description: Retrieve a list of all assignments.
 *    responses:
 *     '200':
 *       description: Assignments retrieved successfully
 *     '500':
 *       description: Internal server error
 */
router.get('/getassignments', getAssignments);

/**
 * @swagger
 * /getcourseassignments:
 *  post:
 *   summary: Get assignments by course ID
 *   description: Retrieve assignments of a course by its ID.
 *   requestBody:
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *          type: object
 *          properties:
 *              courseId:
 *                  type: string
 *                  description: The ID of the course to retrieve assignments for
 *   responses:
 *    '200':
 *      description: Assignments retrieved successfully
 *    '404':
 *      description: Room not found
 *    '500':
 *      description: Internal server error
 */
router.post('/getcourseassignments', getAssignmentsByCourse);

// Check
/**
 * @swagger
 * /dashboard:
 *   get:
 *    summary: Get user dashboard
 *    description: Retrieve the dashboard of the currently authenticated user.
 *    responses:
 *    '201':
 *      description: User dashboard retrieved successfully
 *    '500':
 *      description: Internal server error
 *    '404':
 *      description: User not found
 */
router.get('/dashboard', getDashboard);

/**
 * @swagger
 * /addresource:
 *  post:
 *   summary: Add a new resource
 *   description: Add a new resource to a course.
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *          type: object
 *          properties:
 *             courseId:
 *                type: string
 *                description: The ID of the course to add the resource to
 *             title:
 *                type: string
 *                description: The title of the resource
 *             description:
 *                type: string
 *                description: The description of the resource
 *             link:
 *                type: string
 *                description: The link to the resource
 *   responses:
 *    '201':
 *      description: Resource added successfully
 *    '404':
 *      description: Room not found
 *    '500':
 *      description: Internal server error
 */
router.post('/addresource', addResource);

/**
 * @swagger
 * /getresources:
 *  post:
 *      summary: Get resources by course ID
 *      description: Retrieve resources of a course by its ID.
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   courseId:
 *                     type: string
 *                     description: The ID of the course to retrieve resources for
 *      responses:
 *        '200':
 *         description: Resources retrieved successfully
 *        '404':
 *         description: Room not found
 *        '500':
 *         description: Internal server error
 */
router.post('/getresources', getResourcesByCourse);

/**
 * @swagger
 * /addschedule:
 *  post:
 *   summary: Add a new schedule
 *   description: Add a new schedule to a course.
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *       schema:
 *          type: object
 *          properties:
 *            courseId:
 *              type: string
 *              description: The ID of the course to add the schedule to
 *            title:
 *              type: string
 *              description: The title of the schedule
 *            time:
 *              type: string
 *              description: The time of the schedule
 *            link:
 *              type: string
 *              description: The link to the schedule
 *   responses:
 *    '201':
 *      description: Schedule added successfully
 *    '404':
 *      description: Room not found
 *    '500':
 *      description: Internal server error
 */
router.post('/addschedule', addSchedule);

/**
 * @swagger
 * /getschedulesbycourse:
 *  post:
 *   summary: Get schedules by course ID
 *   description: Retrieve schedules of a course by its ID.
 *   requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                courseId:
 *                 type: string
 *                 description: The ID of the course to retrieve schedules for
 *   responses:
 *    '200':
 *     description: Schedules retrieved successfully
 *    '404':
 *     description: Room not found
 *    '500':
 *     description: Internal server error
 */
router.post('/getSchedulesByCourse', getScheduleByCourse);

/**
 * @swagger
 * /getSchedule:
 *  post:
 *      summary: Get schedules
 *      description: Retrieve schedules of a user.
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *             schema:
 *              type: object
 *              properties:
 *                joinedRooms:
 *                 type: array
 *                 description: The IDs of the rooms (courses) joined by the user
 *                createdRooms:
 *                 type: array
 *                 description: The IDs of the rooms (courses) created by the user
 *      responses:
 *       '200':
 *         description: Schedules retrieved successfully
 *       '404':
 *         description: Room not found
 *       '500':
 *         description: Internal server error
 */
router.post('/getSchedule',getSchedule);

router.post('/submitReports',submitReports);
router.get('/Reports',getReports);
router.post('/getAssignmentsJoined', getAssignmentsJoined);
router.get('/usercourses', getCourses);
router.post('/getresourcesJoined', getresourcesJoined);

router.post('/addschedule', addSchedule);
router.post('/getSchedulesByCourse', getScheduleByCourse);
router.post('/getSchedule',getSchedule)
router.post('/getParticipants',getParticipantsByCourse);
router.get('/getupdateuser', getUserDetails);
router.get('/getUsers', getUsers);
router.post('/getUserName', getUserName);
router.post('/deleteUser',deleteUser);
router.post('/deleteCourse',deleteCourse);
router.post('/submitReports',submitReports);
router.get('/Reports',getReports);

module.exports = router;