import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "data:image/png;base64,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",
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;