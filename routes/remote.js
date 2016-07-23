var express = require('express');
var router = express.Router();

router.get('/:section', function(req, res, next) {
    var section = req.params.section;
    if (section == null) {

    } else if (section == "tv") {
        res.render('tv', {controller: ''});
    } else if (section == "xbox") {
        res.render('xbox');
    } else if (section == "wii") {
        res.render('wii');
    } else if (section == "soundbar") {
        res.render('soundbar');
    }
});

module.exports = router;
