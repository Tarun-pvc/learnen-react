const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserModel = new  mongoose.Schema({
    userName: {
        type:String,
        required:[true,"Please add a username"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email ID"
        ]
    },
    phoneNumber:{
        type:String,
        required:true,
        match:[
            /^[1-9][0-9]{9}$/,
            "Please add a valid Phone number"
        ]
    },
    password:{
        type:String,
        required:true,
        match:[
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            "Password Incorrect : Minimum 8 characters , atleast one alphabel , digit , special character"
        ]
    },
    Security_Question: {
        type:String,
        required:true
    },
    Security_Answer: {
        type:String,
        required:true,
    },
    Joined_Room: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    Created_Room: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    Position: { type: String, enum: ['student', 'mentor', 'admin'] },
    Tags: [String],
    displayPicture: { type: String },
    bio: { type: String },
    dateOfBirth: { type: Date },
    academicQualifications: { type: String },
    Linkedin: { type: String },
    Portfolio: { type: String },
    profileImage: { type: String },
    
})

UserModel.pre('save', async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt); 
    this.password = hashedPassword;
    next();
});

const User = mongoose.model("User",UserModel)

module.exports=User;