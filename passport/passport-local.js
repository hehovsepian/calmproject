import passport from "passport";
import {Strategy} from "passport-local";
import mongoose from "mongoose";
import {User} from "../mongo/model/user_schema.js";


const authFields = {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
}

passport.use('login',
    new Strategy( authFields,
        async (req, username, password, callback) => {
                try {
                    const user = await User.findOne({username: username});

                    if (!user) {
                        return callback(null, false, { message: 'User does not exist, please sign up or try again'});
                    }

                    const checkPassword = await user.comparePassword(password);

                    if (!checkPassword) {
                        return callback(null, false, {message: 'Incorrect password'});
                    }

                    return callback(null, user, {message: 'Logged In Successfully'});

                } catch (err) {
                    return callback(null, false, {statusCode: 400, message: err.message});
                }
    }
));

passport.use('signup',
    new Strategy( authFields,
        async (req, username, password, callback) => {
            try {
                const checkUsername = await User.findOne({ username : username });

                if (checkUsername) {
                    return callback(null, false, {statusCode: 409, message: 'User already registered, log in instead'});
                }

                const newUser = new User();
                newUser.email = req.body.email;
                newUser.username = req.body.username;
                newUser.password = req.body.password;

                newUser.activeDays = 0;
                newUser.streak = 0;
                newUser.totalMinutes = 0;
                newUser.totalSessions = 0;

                await newUser.save();
                return callback(null, newUser, {statusCode: 200, message: 'Successfully signed up, please log in'});

            } catch (err) {
                console.log(err);
                return callback(null, false, {statusCode: 400, message: err.message});
            }
        }
    ));


export default passport;
