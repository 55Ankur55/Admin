var express = require('express');
var router = express.Router();

var db=require('../database');

router.post('/', function(req, res) { 
   var appno=req.body.app_no;
    var sql='SELECT * FROM f_emp_applied_for LEFT JOIN f_emp_uploads ON f_emp_applied_for.app_no = f_emp_uploads.app_no WHERE f_emp_applied_for.app_no="'+appno+'"';
   // var sql='SELECT * FROM f_emp_applied_for WHERE app_no="'+appno+'"';	
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('applicant', { title: 'applicant', userData: data});
  });
});

module.exports = router;
