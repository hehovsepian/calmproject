import mongoose from 'mongoose'

const sleepStorySchema =  new mongoose.Schema({
    name: String,
    image:String,
    narrator:String,
    duration: String,
    audio: String,
    dateCreated: Date,
})

const SleepStory = mongoose.model('SleepStory', sleepStorySchema, 'sleep_stories');

export {SleepStory};
