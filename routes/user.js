let express = require('express'),
bodyParser = require('body-parser'),
router = module.exports = express.Router();
 
router.use(bodyParser.text());

var db=require('../database');
router.post('/' ,function(req, res) {
    var dep=req.body.dep;
    var post=req.body.post;
	if(dep=='' && post==''){
       var sql='SELECT * FROM f_emp_applied_for';	
	    db.query(sql, function (err, data, fields) {
	    if (err) throw err;
	    res.render('user-list', { title: 'User List', userData: data});
	  });
	}
	else if(dep==''){
		var sql='SELECT * FROM f_emp_applied_for WHERE post_name="'+post+'"';	
	    db.query(sql, function (err, data, fields) {
	    if (err) throw err;
	    res.render('user-list', { title: 'User List', userData: data});
	  });
	}
	else if(post==''){
		var sql='SELECT * FROM f_emp_applied_for WHERE depName="'+dep+'"';	
	    db.query(sql, function (err, data, fields) {
	    if (err) throw err;
	    res.render('user-list', { title: 'User List', userData: data});
	  });
	}
	else{
		var sql='SELECT * FROM f_emp_applied_for WHERE depName="'+dep+'" and  post_name="'+post+'"';	
	    db.query(sql, function (err, data, fields) {
	    if (err) throw err;
	    res.render('user-list', { title: 'User List', userData: data});
	  });
	}
  //   var sql='SELECT * FROM f_emp_applied_for WHERE depName="'+dep+'"';	
  //   db.query(sql, function (err, data, fields) {
  //   if (err) throw err;
  //   res.render('user-list', { title: 'User List', userData: data});
  // });
}); 

module.exports = router;