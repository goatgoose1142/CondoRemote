var express = require('express');
var router = express.Router();

router.post('/tv/:action', function(req, res, next) {
    var data = req.body;
    var action = req.params.action;
    if (action == undefined) {

    } else if (action == "arrowUp") {

    } else if (action == "arrowDown") {

    } else if (action == "arrowLeft") {

    } else if (action == "arrowRight") {

    } else if (action == "enter") {

    } else if (action == "volumeUp") {

    } else if (action == "volumeDown") {

    } else if (action == "settings") {

    } else if (action == "power") {

    } else if (action == "numpad") {

    }
    res.send({"msg": action});
});

router.post('/cable/:action', function(req, res, next) {
    var data = req.body;
    res.send({"msg": "we good"});
});

router.post('/xbox/:action', function(req, res, next) {
    var data = req.body;
    var action = req.params.action;
    if (action == undefined) {

    } else if (action == "arrowUp") {

    } else if (action == "arrowDown") {

    } else if (action == "arrowLeft") {

    } else if (action == "arrowRight") {

    } else if (action == "a") {

    } else if (action == "b") {

    } else if (action == "y") {

    } else if (action == "bumberLeft") {

    } else if (action == "menu") {

    } else if (action == "power") {

    } else if (action == "numpad") {

    }
    res.send({"msg": "we good"});
});

router.post('/soundbar/:action', function(req, res, next) {
    var data = req.body;
    res.send({"msg": "we good"});
});

module.exports = router;