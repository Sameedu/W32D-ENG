//Model for answers collection

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answersSchema = new Schema({
    answerid:{
        type: Number,
        required: true
    },
    answer:{
        type: String,
        minLength: 10,
        required: true
    },
    answeredby:{
        type: String,
        required: true
    },
    assoicated_question:{
        type: String,
        required: true,
    },
    created_on:{
        type:Date,
        required: true,
        }
    },
);

const Answers=mongoose.model('Answers', answersSchema, 'answers');
module.exports = Answers;