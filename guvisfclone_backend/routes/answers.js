const express = require('express');
const router = express.Router();
const answerModule = require('../modules/answerModule');
const authorize = require('../modules/authorize');

router.get('/', answerModule.getAnswers);
router.get('/:id', answerModule.getAnswer);

// Only authenticated users with token can create or modify it
router.post('/create', authorize.autenticateToken, answerModule.createAnswer);
router.patch('/update/:id', authorize.autenticateToken, answerModule.updateAnswer);
router.delete('/delete/:id', authorize.autenticateToken, answerModule.deleteAnswer);

module.exports = router;