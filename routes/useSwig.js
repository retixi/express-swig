/**
 * Created by renxi on 2016/11/11.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('useSwig.html',{
        name1:'aaa',
        name2:'bbb',
        nums:[1,2,3,4,5],
        json:{name:'rtx',
            sex:'male',
            pwd:'kldjdorgiweajfsdlfjsdfjesfosdjfldsjfdslj'}

    });
});

module.exports = router;