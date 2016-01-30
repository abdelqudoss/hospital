var express = require('express');
var router = express.Router();
var hosbitaMgr = require('../app/hospitals').officeMgr;


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("results");
    res.render('index', { title: 'Express' });
});

/* GET login */
router.get('/login', function(req, res, next) {
    res.render('login');
});
/* GET cpanel */
router.get('/cpanel', function(req, res, next) {
    res.render('cpanel');
});
/* GET qutions */
router.get('/questions', function(req, res, next) {
    res.render('questions');
});
/* GET qutions */
router.get('/hospitals', function(req, res, next) {
    res.render('hospitals');
});

module.exports = router;
