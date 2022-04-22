//Model for questions collection

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
    questionid:{
        type:Number,
        required: true
    },
    questionsName:{
        type:String,
        minLength: 10,
        required: true
    },
    associated_tags:{
        type: Array,
        required: true
    },
    raised_by:{
        type:String,
        required: true,
    },
    created_on:{
        type:Date,
        required: true,
        }
    },
);

const Questions=mongoose.model('Questions', questionsSchema, 'questions');
module.exports = Questions;