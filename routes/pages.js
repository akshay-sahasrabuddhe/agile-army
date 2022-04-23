const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/', async (req, res) => {
    res.render('pages/index');
});


router.get('/guitargame', async (req, res) => {
    res.render('pages/guitarGame');
});

router.get('/paintgame', async (req, res) => {
    res.render('pages/paintGame');
});


router.get('/mazeGame', async (req, res) => {
    res.render('pages/mazeGame');
});



module.exports = router;