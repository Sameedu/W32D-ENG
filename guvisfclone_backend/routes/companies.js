const express = require('express');
const router = express.Router();
const companiesModule = require('../modules/companiesModule');
const authorize = require('../modules/authorize');

router.get('/', companiesModule.getCompanies);
router.get('/:id', companiesModule.getCompany);

// Only authenticated users with token can create or modify it
router.post('/create', authorize.autenticateToken, companiesModule.createCompanies);
router.put('/update/:id', authorize.autenticateToken, companiesModule.updateCompanies);
router.delete('/delete/:id', authorize.autenticateToken, companiesModule.deleteCompanies);

module.exports = router;