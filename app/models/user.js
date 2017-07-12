import mongoose, {Schema} from 'mongoose';
import uniquevalidator from 'mongoose-unique-validator';
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});
UserSchema.plugin(uniquevalidator);
export default mongoose.model('User', UserSchema);