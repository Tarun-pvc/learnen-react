const User = require('../models/UserModel')
const bcrypt = require('bcrypt')

const registerUser = async (req, res , next) => {
    const name = req.body.signupname;
    const email = req.body.signupemail;
    const password = req.body.signuppass;
    const phonenumber = req.body.phonenumber;
    const securityquestion = req.body.securityquestion;
    const securityanswer = req.body.securityanswer;
    console.log(name);
    console.log(email);
    console.log(password);
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
        console.log(newUser);
        await newUser.save();
        req.session.user = newUser;
        res.status(200).json({ success: true });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Registration failed" });
        next(err)
    }

}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide an email and a password' });
    }

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }

        const passwordIsCorrect = await bcrypt.compare(password, user.password);

        console.log(email);
        console.log(user.password);

        if (user && passwordIsCorrect) {
            let newUser = await User.findOne({ email }).select('-password');
            req.session.user = newUser;
            console.log(req.session.user);
            console.log(req.session.user._id)
            return res.status(201).json(newUser);
        } else {
            return res.status(400).json({ message: 'Please provide a correct email and password' });
        }
    } catch (error) {
        console.error(error);
        next(error)
    }
};

const logoutUser = async (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err)
        res.json({
            message: "Logged out successfully"
        })
    })
}


const updateUser = async (req, res, next) => {
    const userId = req.body.userId
    console.log("req.boyd",req.body)
    console.log(userId);
    const formdata  = req.body;
    console.log("Upading user");
    console.log(formdata);
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        user.userName = formdata.firstName+" "+formdata.lastName;
        user.phoneNumber = formdata.phone;
        user.bio = formdata.bio;
        user.academicQualifications = formdata.acQua;
        user.Linkedin = formdata.linkedIn;
        user.Portfolio = formdata.portfolio;
        user.dateOfBirth = formdata.dateOfBirth;
        console.log("filename",req.fileName);
        if (req.fileName) {
            user.profileImage = "/"+req.fileName;
        }

        await user.save();
        console.log("User updated");
        console.log(user);
        
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
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not get user" });
        next(err);
    }  
}



module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    getUserDetails
}

