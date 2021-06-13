import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    phone: {
        type:Number,
        required: true,
        maxlength: 10,
        unique: true
    },
    address: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
const postUser = mongoose.model('user', userSchema);

export default postUser;