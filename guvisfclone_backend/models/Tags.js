//Model for user collection

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
    tag_id:{
        type: String,
        required: true
    },
    tagsname:{
        type:String,
        required: true
    },
    tags_desc:{
        type:String,
        minLength: 5,
        required: true
    }
});

const Tags=mongoose.model('Tags', tagsSchema, 'tags');
module.exports = Tags;