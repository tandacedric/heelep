
import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    image: {
        /* The code of this Category */
        type: String,
        required: [true, 'Please provide a image'],
        //maxlength: [20, 'Name cannot be more than 60 characters'],
    },
    background: {
        /* The code of this Category */
        type: String,
        required: [true, 'Please provide a background image'],
        //maxlength: [20, 'Name cannot be more than 60 characters'],
    },
    code: {
        /* The code of this Category */
        type: String,
        required: [true, 'Please provide a name'],
        //maxlength: [20, 'Name cannot be more than 60 characters'],
    },
    name: {
        /* The names of this Category by language */
        type: [
            {
                lang : String,
                name : String
            }
        ],
        default: undefined
        //required: [true, "Please provide the email"],
        //maxlength: [20, "Owner's Name cannot be more than 60 characters"],
    },

    description: {
        /* The names of this Category by language */
        type: [
            {
                lang : String,
                name : String
            }
        ],
        default: undefined
        //required: [true, "Please provide the email"],
        //maxlength: [20, "Owner's Name cannot be more than 60 characters"],
    },
})

//module.exports = mongoose.models.User || mongoose.model('User', UserSchema)

export default mongoose.models.Category || mongoose.model('Category', CategorySchema)
