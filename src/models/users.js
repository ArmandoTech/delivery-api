import { model, Schema } from 'mongoose'
import { client } from '../constants/roles'

const UserSchema = new Schema({
    deleted: {type: Boolean, default: false},
    verify: {type: Boolean, default: false},
    role: {type: String, default: client},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    img: {type: String},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    phone: {type: Number},
}, {
    toJSON: (doc, data) => {
        data.id = data._id,
        delete data._id 
        delete data.__v
    }
})

export const User = model('User', UserSchema)