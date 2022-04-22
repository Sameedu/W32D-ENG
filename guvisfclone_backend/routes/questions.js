const express = require('express');
const router = express.Router();
const questionsModule = require('../modules/questionsModule');
const authorize = require('../modules/authorize');

router.get('/', questionsModule.getQuestions);
router.get('/:id', questionsModule.getQuestion);

// Only authenticated users with token can create or modify it

router.post('/create', authorize.autenticateToken, questionsModule.createQuestions);
router.patch('/update/:id', authorize.autenticateToken, questionsModule.updateQuestions);
router.delete('/delete/:id', authorize.autenticateToken, questionsModule.deleteQuestions);

module.exports = router;