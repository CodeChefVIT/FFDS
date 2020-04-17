const router = require('express').Router();
const verify = require('./verify');


router.get('/',verify, (req,res) => {
    res.json ({
        posts : {
            Org: 'CODECHEF',
            PROJECT : 'FFDS'
        }
    });
});

module.exports = router;