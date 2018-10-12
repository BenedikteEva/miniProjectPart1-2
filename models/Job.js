var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jobSchema = new Schema({
    type: String,
    company: String,
    companyUrl: String
});


// Build the User model
module.exports =mongoose.model('Job', jobSchema);
