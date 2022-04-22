//Model for companies collection

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companiesSchema = new Schema({
    company_id:{
        type:Number,
        required: true
    },
    description:{
        type:String,
        minLength: 10,
        required: true
    },
    company_name:{
        type: String,
        required: true
    }
});

const Companies=mongoose.model('Companies', companiesSchema, 'companies');
module.exports = Companies;