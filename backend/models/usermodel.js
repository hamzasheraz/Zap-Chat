import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please Provide First Name"],
    },

    lastName: {
        type: String,
        required: [true, "Please Provide Last Name"],
    },

    email: {
        type: String,
        required: [true, "Please Provide a Email"],
        unique: true,
    },

    phoneNumber:{
        type: String,
        required: [true, "Please Provide a Phone Number"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Please Provide a Password"],
    },
    // isVerified: {
    //     type: Boolean,
    //     default: false,
    // },
    // forgotPasswordToken: String,
    // forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry: Date,
});

let User;
if (mongoose.modelNames().includes('users')) {
    // If it exists, retrieve the existing model
    User = mongoose.model('users');
} else {
    // If it doesn't exist, define the "users" model
    User = mongoose.model('users', userSchema);
}


export default User;