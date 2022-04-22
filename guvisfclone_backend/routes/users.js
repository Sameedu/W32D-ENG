var express = require('express');
var router = express.Router();
const userModule = require('../modules/userModule');

/* GET users listing. */
router.get('/', userModule.getUsers);
router.get('/:id', userModule.getUser);

// Only authenticated users with token can create or modify it

module.exports = router;
