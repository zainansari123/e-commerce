const mongoose = require('mongoose');
const userDetailsSchema = new mongoose.Schema({
	userName:String,
email: {
        type: String,
        unique: true
    },
    password: String
});
const userModel=mongoose.model('userSignUpDetail',userDetailsSchema);
module.exports=userModel;