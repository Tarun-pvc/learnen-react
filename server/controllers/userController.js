const User = require('../models/UserModel');
const Room = require('../models/RoomModel');

const registerUser = async (req, res, next) => {
    const name = req.body.signupname;
    const email = req.body.signupemail;
    const password = req.body.signuppass;
    const phonenumber = req.body.phonenumber;
    const securityquestion = req.body.securityquestion;
    const securityanswer = req.body.securityanswer;

    try {
        const newUser = new User({
            userName: name,
            email: email,
            password: password,
            phoneNumber: phonenumber,
            Security_Answer: securityanswer,
            Security_Question: securityquestion,
            Joined_Room: [],
            Created_Room: [],
            Position: "student",
            Tags: []
        });
        await newUser.save();
        req.session.user = newUser;
        res.status(200).json({ success: true });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Registration failed" });
        next(err);
    }
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide an email and a password' });
    }

    try {
        let user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }

        req.session.user = user;
        return res.status(201).json(user);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const logoutUser = async (req, res, next) => {
    req.session.destroy((err) => {
        res.json({
            message: "Logged out successfully"
        });
    });
}

const updateUser = async (req, res, next) => {
    const userId = req.body.userId;
    const formdata = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        user.userName = formdata.firstName + " " + formdata.lastName;
        user.phoneNumber = formdata.phone;
        user.bio = formdata.bio;
        user.academicQualifications = formdata.acQua;
        user.Linkedin = formdata.linkedIn;
        user.Portfolio = formdata.portfolio;
        user.dateOfBirth = formdata.dateOfBirth;
        if (req.fileName) {
            user.profileImage = "/" + req.fileName;
        }
        await user.save();       
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not update user" });
        next(err);
    }
}

const getUserDetails = async (req, res, next) => {
    const userId = req.query.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not get user" });
        next(err);
    }
}

const getParticipantsByCourse = async (req, res, next) => {
    const { courseId } = req.body;
    try {
        const room = await Room.findById(courseId);
        if (!room) {
            res.status(404).json({ error: "Room not found" });
            return;
        }
        const participants = await User.find({ _id: { $in: room.participants } });
        res.status(200).json(participants);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not get participants" });
        next(err);
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    getUserDetails,
    getParticipantsByCourse
}
