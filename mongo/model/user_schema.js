import mongoose from 'mongoose'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const jwtPrivateSecret = process.env.JWT_PRIVATE_SECRET.replace(/\\n/g, "\n");

const userSchema =  new mongoose.Schema({
    email: {
        type:String,
        required:true,
    },
    username: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    activeDays:{
        type:Number,
        required:false,
    },
    streak:{
        type:Number,
        required:false,
    },
    totalMinutes:{
        type:Number,
        required:false,
    },
    totalSessions:{
        type:Number,
        required:false,
    },
})

userSchema.pre("save", async function (next) {
    if (!this.password || !this.isModified("password")) {
        return next;
    }

    this.password = await bcrypt.hash(this.password, parseInt(process.env.HASH));
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateVerificationToken = function () {
    return jwt.sign({id: this._id}, jwtPrivateSecret, {
        expiresIn: "10d",
        algorithm: "RS256"});
};

const User = mongoose.model('User', userSchema, 'users');

export {User}
