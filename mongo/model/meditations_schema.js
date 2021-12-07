import mongoose from 'mongoose'

const meditationsSchema =  new mongoose.Schema({
    name: String,
    image:String,
    dateCreated: Date,
    tracks: [
        {
            title:String,
            audio:String,
        }
    ]
})

const Meditation = mongoose.model('Meditation', meditationsSchema, 'meditations');

export {Meditation};
