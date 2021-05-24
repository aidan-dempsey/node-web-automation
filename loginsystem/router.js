var express = require('express');
var router = express.Router();

const credential = {
    username: "api",
    password: "admin123"
}
//login user
router.post('/login', (req,res) => {
    if(req.body.username==credential.username && req.body.password==credential.password){
        req.session.user = req.body.username;
        res.redirect('/route/auto');
    }else{
        res.end('Invalid username or password')
    }

});


router.get('/auto', (req,res) => {
    if(req.session.user){
        res.render('auto')
    }else{
    res.send('Unauthorized user')}
});



module.exports = router;