var express = require('express');
var router = express.Router();

/* GET users listing. */
const myfuc = function(req, res, next) {
    if (req.params.id > 4) {
        res.render('user', { user: 'đây là trang user' })
        console.log('you are still here');
        next()
    } else res.render('index', { title: 'Express', render: 'đây là trang home  ' })

}

router.get('/:id', myfuc, (req, res, next) => {
    console.log('Request Type:', req.method)

});

module.exports = router;