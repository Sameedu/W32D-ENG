const express = require('express');
const router = express.Router();
const tagsModule = require('../modules/tagsModule');
const authorize = require('../modules/authorize');


router.get('/', tagsModule.getTags);
router.get('/:id', tagsModule.getTag);

// Only authenticated users with token can create or modify it
router.post('/create', authorize.autenticateToken, tagsModule.createTags);
router.patch('/update/:id', authorize.autenticateToken, tagsModule.updateTags);
router.delete('/delete/:id', authorize.autenticateToken, tagsModule.deleteTags);

module.exports = router;