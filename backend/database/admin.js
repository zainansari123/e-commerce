var mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
	 email: {
        type: String,
        unique: true
    },
    pass: String
});
module.exports= mongoose.model('AdminModel',adminSchema);
