const Users = require('../models/User');



exports.getUsers = async (req,res,next) => {
    try{
        var response = await Users.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.getUser = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Users.findById(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}