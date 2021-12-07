import mongoose from 'mongoose'

const bodyTrackSchema =  new mongoose.Schema({
    name: String,
    image:String,
    narrator:String,
    duration: String,
    audio: String,
    dateCreated: Date,
})

const BodyTrack = mongoose.model('BodyTrack', bodyTrackSchema, 'body_tracks');

export {BodyTrack};
