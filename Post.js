const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    task_name: {
        type : String,
        required : true},
    task_description: {
        type : String,
        required : true},
    creator: {
        type : String,
        required : true},
    duration_in_minutes : {
        type : Number,
        required :true},
});
module.exports = mongoose.model('Posts',PostSchema);