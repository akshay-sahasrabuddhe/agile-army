const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/', async (req, res) => {
    res.render('pages/index');
});

module.exports = router;