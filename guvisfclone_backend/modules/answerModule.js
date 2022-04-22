const Answer = require('../models/Answer');

exports.createAnswer = async (req,res,next) => {
    
    const answer = new Answer({
        answerid : req.body.answerid,
        answer : req.body.answer,
        answeredby : req.body.answeredby,
        assoicated_question : req.body.assoicated_question,
        created_on : req.body.created_on,
    })

    try{
        var response = await answer.save();
        res.send(response);
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.getAnswers = async (req,res,next) => {
    try{
        var response = await Answer.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.getAnswer = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Answer.findById(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.updateAnswer = async (req,res,next) => {

    try {
        const id = req.params.id;
        var response = await Answer.findByIdAndUpdate(id, {
            answer : req.body.answer
        }, {new: true})
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.deleteAnswer = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Answer.findByIdAndRemove(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}