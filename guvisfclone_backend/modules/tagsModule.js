const Tags = require('../models/Tags');

exports.createTags = async (req,res,next) => {
    
    const tags = new Tags({
        tag_id : req.body.tag_id,
        tagsname : req.body.tagsname,
        tags_desc : req.body.tags_desc,
    })

    try{
        var response = await tags.save();
        res.send(response);
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.getTags = async (req,res,next) => {
    try{
        var response = await Tags.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}


exports.getTag = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Tags.findById(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.updateTags = async (req,res,next) => {

    try {
        const id = req.params.id;
        var response = await Tags.findByIdAndUpdate(id, {
            tagsname : req.body.tagsname
        }, {new: true})
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.deleteTags = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Tags.findByIdAndRemove(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}