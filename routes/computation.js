var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {


    if (Object.keys(req.query).length === 0) {
        var w = Math.random();
        var x = Math.random();
        res.render('computation', {
            s: `math.pow() applied to ${w} is ${Math.pow(w,x)}`,
            p: `math.sign() applied to ${w} is ${Math.sign(w)}`,
            q: `math.tanh() applied to ${w} is ${Math.tanh(w)}`,
            r: `math.trunc() applied to ${w} is ${Math.trunc(w)}`
        });
    }
    else {

        for (let b in req.query) {

            console.log(b)

            res.render('computation', {
                s: `math.pow() applied to ${req.query[b]} is ${Math.pow(req.query[b])}`,
                p: `math.sign() applied to ${req.query[b]} is ${Math.sign(req.query[b])}`,
                q: `math.tanh() applied to ${req.query[b]} is ${Math.tanh(req.query[b])}`,
                r: `math.trunc() applied to ${req.query[b]} is ${Math.trunc(req.query[b])}`
            })

        }
    }


});


module.exports = router;