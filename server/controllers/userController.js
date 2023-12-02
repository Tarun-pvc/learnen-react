const User = require('../models/UserModel')
const bcrypt = require('bcrypt')

const registerUser = async(req,res)=>{
    const name = req.body.signupname;
    const email = req.body.signupemail;
    const password = req.body.signuppass;
    const phonenumber = req.body.phonenumber;
    const securityquestion = req.body.securityquestion;
    const securityanswer = req.body.securityanswer;
    console.log(name);
    console.log(email);
    console.log(password);
    try{
        const newUser = new User({
            userName : name,
            email : email,
            password : password,
            phoneNumber : phonenumber,
            Security_Answer : securityanswer,
            Security_Question : securityquestion,
            Joined_Room : [],
            Created_Room : [],
            Position : "student",
            Tags : []
        });
        console.log(newUser);
        await newUser.save();
        req.session.user = newUser;
        res.status(200).json({ success: true });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: "Registration failed" });
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
            return res.status(201).json(newUser);
        } else {
            return res.status(400).json({ message: 'Please provide a correct email and password' });
        }
    } catch (error) {
        console.error(error);
    }
};

module.exports={
    registerUser,
    loginUser
}

