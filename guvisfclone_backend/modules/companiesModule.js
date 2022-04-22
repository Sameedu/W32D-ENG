const Companies = require('../models/Companies');

exports.createCompanies = async (req,res,next) => {
    
    const companies = new Companies({
        company_id : req.body.company_id,
        description : req.body.description,
        company_name : req.body.company_name,
    })

    try{
        var response = await companies.save();
        res.send(response);
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.getCompanies = async (req,res,next) => {
    try{
        var response = await Companies.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.getCompany = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Tags.findById(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.updateCompanies = async (req,res,next) => {

    try {
        const id = req.params.id;
        var response = await Companies.findByIdAndUpdate(id, {
            company_name : req.body.company_name,
            description : req.body.description
        }, {new: true})
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.deleteCompanies = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Companies.findByIdAndRemove(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}