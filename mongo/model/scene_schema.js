import mongoose from 'mongoose'

const sceneSchema =  new mongoose.Schema({
    name: String,
    image:String,
    video:String,
    audio: String,
    dateCreated: Date,
})

const Scene = mongoose.model('Scene', sceneSchema, 'scenes');

export {Scene};
