var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/cv', (req, res) => {
    res.render('cv');
});


module.exports = router;