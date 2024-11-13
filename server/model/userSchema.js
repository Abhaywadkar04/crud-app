import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    userId: { // Field for auto-incremented ID
        type: Number
    }
});

// Apply auto-increment to userId field
userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const User = mongoose.model('user', userSchema);

export default User;
