const User = require('../models/UserModel')

const registerUser = async(req,res)=>{
    const name = req.body.signupname;
    const email = req.body.signupemail;
    const password = req.body.signuppass;
    console.log(name);
    console.log(email);
    console.log(password);
    try{
        const newUser = new User({
            userName : name,
            email : email,
            password : password,
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

module.exports={
    registerUser
}

