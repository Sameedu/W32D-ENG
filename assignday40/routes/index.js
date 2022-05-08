const fs = require('fs');
var express = require('express');
const dateTime = require('node-datetime');
var router = express.Router();


var dt = dateTime.create();
var date_timefmt= dt.format('m_d_Y-H_M_S');
var currtimetsamp = dt.format('H:M:S')

const filelocation=`./day40assign/`+date_timefmt+`.txt`

createfile= ()=> {
    fs.writeFile(filelocation, currtimetsamp, function (err) {
    if (err) throw err;
      console.log('File is created successfully.');
    });
  }
list = () => {
   let files=[]
   fs.readdirSync(`./day40assign/`).forEach(file => {
      files.push(file)
    });
    return files
  }

router.get('/', function(req, res, next) {
    res.send({msg : "Hello"})
  });

router.get('/createfile', function(req, res, next) {
    createfile();
    res.send({msg : "File Created"})
  });

router.get('/list', function(req, res, next) {
    response = list();
    res.send({response})
  });

module.exports = router;