var router = require('express').Router();


router.get('/login',function(req,res) {
	res.render('accounts/login');
});


module.exports = router;