const Questions = require('../models/Questions');

exports.createQuestions = async (req,res,next) => {
    
    const questions = new Questions({
        questionid : req.body.questionid,
        questionsName : req.body.questionsName,
        associated_tags : req.body.associated_tags,
        raised_by : req.body.raised_by,
        created_on : req.body.created_on,
    })

    try{
        var response = await questions.save();
        res.send(response);
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.getQuestions = async (req,res,next) => {
    try{
        var response = await Questions.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.getQuestion = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Tags.findById(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.updateQuestions = async (req,res,next) => {

    try {
        const id = req.params.id;
        var response = await Questions.findByIdAndUpdate(id, {
            questionsName : req.body.questionsName
        }, {new: true})
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.deleteQuestions = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Questions.findByIdAndRemove(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}