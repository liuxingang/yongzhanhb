/**
 * Created by pmcc on 2017/6/12.
 */
var express = require('express');
var userAgent = require('useragent');
var router = express.Router();

router.get('/',function (req,res) {
    var ua = userAgent.parse(req.headers['user-agent']);
    if ((ua.source || '').match(/MicroMessenger|Android|webOS|iPhone|iPod|BlackBerry/)) {
        return res.redirect('/h5');
    }
    res.render('index')

});

module.exports = router;

