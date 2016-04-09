var router = require('express').Router();


router.get('/login',function(req,res) {
	res.render('accounts/login');
});

router.post('/login',function(req,res) {
	res.send(req.body.name);
});

router.get('/getproducts',function(req,res) {
	
});



module.exports = router;