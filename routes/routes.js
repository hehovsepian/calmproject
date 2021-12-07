import express from 'express'
import mongoose from 'mongoose';
import passport from "passport";
import passportLocal from "../passport/passport-local.js";
import fs from 'fs'
import util from 'util'
import path from "path";
import {User} from '../mongo/model/user_schema.js';
import {SleepStory} from '../mongo/model/sleepstory_schema.js';
import {BodyTrack} from '../mongo/model/bodytrack_schema.js';
import {Meditation} from "../mongo/model/meditations_schema.js";
import {Scene} from "../mongo/model/scene_schema.js";
import createCookieFromToken from "../helpers/createCookie.js";
import authenticate from '../passport/authenticate.js';
import multer from 'multer'
import {uploadFile} from '../s3/s3.js'


const __dirname = path.resolve();
const upload = multer({ dest: 'multer_uploads/' })

const unlinkFile = util.promisify(fs.unlink)


const routes = (app) => {

    if(process.env.NODE_ENV === 'production') {
        app.use(express.static('frontend'))
    }

    app.get('/test', function (req, res) {
        res.send({message: 'test'});
    });

    app.post('/login',(req, res, next)=> {
        passport.authenticate('login',{},(err, user, info)=>{
            if (err || !user) {
                let message = err;
                if (info) {
                    message = info.message;
                }
                res.send({status: "error", message: message});
            }else{
                createCookieFromToken(user, 200, req, res);
            }
        })(req, res, next);
    })

    app.post('/signup',(req, res, next)=> {
        passport.authenticate('signup',{},(err, user, info)=>{
            if (err || !user) {
                let message = err;
                if (info) {
                    message = info.message;
                }
                return res.status(401).json({status: "error", message: message});
            }
            res.send({message: info.message})
        })(req, res, next);
    })

    app.get("/home", authenticate, (req, res) => {
        if(req.error){
            res.status(200).send({message: req.error});
        }else{
            res.status(200).send({message: "success", user:req.user});
        }
    })

    app.post("/change_password", (req, res) => {
     (async () => {
        const user = await User.findOne({ username : req.body.username });
        const checkPassword = await user.comparePassword(req.body.oldpassword);
        if (!checkPassword) {
            res.send({message: 'Old password is incorrect'});
        }
        user.password = req.body.newpassword
        user.save({validateBeforeSave:false},function (err) {
              if (err) {
                res.statusMessage = err;
                return res.send({status: "error", message: err}).end();
              } else {
                return res.send({status: "success", message: "Your password has been updated"}).end();
              }
        })
     })();
    })

    app.get("/logout", (req, res) => {
        res.clearCookie("jwt");
        res.status(200).send({message:"logged out"});
    })

    app.get('/all_sleep', authenticate, (req,res)=>{
        (async () => {
            const allStories = await SleepStory.find({})
            res.status(200).send(allStories);
        })();
    })

    app.get('/all_body', authenticate, (req,res)=>{
        (async () => {
            const allBodyTracks = await BodyTrack.find({})
            res.status(200).send(allBodyTracks);
        })();
    })

    app.get('/all_meditations', authenticate, (req,res)=>{
        (async () => {
            const allMeditations = await Meditation.find({})
            res.status(200).send(allMeditations);
        })();
    })

    app.get('/all_scenes', authenticate, (req,res)=>{
        (async () => {
            const allScenes = await Scene.find({})
            res.status(200).send(allScenes);
        })();
    })

    app.get('/one_sleepstory/id/:id', authenticate, (req,res)=>{
        (async () => {
            const oneStory = await SleepStory.findById(req.params.id)
            res.status(200).send(oneStory);
        })();
    })

    app.get('/one_bodytrack/id/:id', authenticate, (req,res)=>{
        (async () => {
            const oneTrack = await BodyTrack.findById(req.params.id)
            res.status(200).send(oneTrack);
        })();
    })

    app.get('/one_meditation/id/:id', authenticate, (req,res)=>{
        (async () => {
            const oneMeditation = await Meditation.findById(req.params.id)
            res.status(200).send(oneMeditation);
        })();
    })

    app.get('/one_scene/id/:id', authenticate, (req,res)=>{
        (async () => {
            const oneScene = await Scene.findById(req.params.id)
            res.status(200).send(oneScene);
        })();
    })

    app.post('/upload_single', upload.fields([{name:'image'}, {name:'audio'}, {name:'video'}]), (req,res)=>{
        (async () => {
            let name =  req.body.name

            let newModel;
            let existingObject;

            if(req.body.category === "Sleep"){
                newModel = new SleepStory;
                existingObject = await SleepStory.findOne({ name : name });
            }else if(req.body.category === "Body"){
                newModel = new BodyTrack
                existingObject = await BodyTrack.findOne({ name : name });
            }else if(req.body.category === "Scenes"){
                newModel = new Scene
                existingObject = await Scene.findOne({ name : name });
            }

            if(!existingObject){
                const imageResult = await uploadFile(req.files.image[0])
                const audioResult = await uploadFile(req.files.audio[0])
                await unlinkFile(req.files.image[0].path)
                await unlinkFile(req.files.audio[0].path)

                if(req.files.video){
                    const videoResult = await uploadFile(req.files.video[0])
                    await unlinkFile(req.files.video[0].path)
                    newModel.video = videoResult.Location
                }else{
                    console.log('no video')
                }

                newModel.name = name
                newModel.narrator = req.body.narrator
                newModel.duration = req.body.duration
                newModel.image = imageResult.Location
                newModel.audio = audioResult.Location
                newModel.dateCreated = new Date()
                newModel.save()

                res.send({message:'new story created!'})
            }else {
                res.send({message:'a story already exists with this name'})
            }
        })();
    })

    app.post('/upload_series', upload.fields([{name:'image'}, {name:'tracks[]'}]), (req,res)=>{
        (async () => {
            // console.log(req.files['tracks[]'])
            // console.log(req.body.trackTitles)
            let name = req.body.name

            let existingObject = await Meditation.findOne({ name : name });

            if(!existingObject){

                const imageResult = await uploadFile(req.files.image[0])
                await unlinkFile(req.files.image[0].path)

                let newSeries = new Meditation;
                let tracks = []

                for (let i = 0; i < req.files['tracks[]'].length; i++) {
                        const audioResult = await uploadFile(req.files['tracks[]'][i])
                        tracks.push({
                            title: req.body.trackTitles[i],
                            audio:audioResult.Location
                        })
                        await unlinkFile(req.files['tracks[]'][i].path)
                }

                newSeries.name = name
                newSeries.image = imageResult.Location
                newSeries.tracks = tracks
                newSeries.dateCreated = new Date()
                newSeries.save()

                res.send({message:'new series created!'})
            }else {
                res.send({message:'a series already exists with this name'})
            }
        })();
    })

}


export {routes as routes};
