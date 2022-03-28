
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        /* The name of this pet */

        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [20, 'Name cannot be more than 60 characters'],
    },
    email: {
        /* The owner of this pet */

        type: String,
        required: [true, "Please provide the email"],
        maxlength: [20, "Owner's Name cannot be more than 60 characters"],
    },
})

//module.exports = mongoose.models.User || mongoose.model('User', UserSchema)

export default mongoose.models.User || mongoose.model('User', UserSchema)
