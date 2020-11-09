var express = require('express');
var router = express.Router();

var db=require('../database');
/* GET home page. */
router.get('/', function(req, res, next) {
  var sql='SELECT * FROM f_emp_applied_for'	
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', { title: 'User List', userData: data});
  });
});

module.exports = router;
