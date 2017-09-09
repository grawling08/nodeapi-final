'use strict';

var _ = require('lodash');

exports.validateUser = (req, res, next) => {
    req.checkBody('firstname', 'Please enter user Firstname').notEmpty();
    req.checkBody('lastname', 'Please enter user Lastname').notEmpty();
    req.checkBody('username', 'Please enter user Username').notEmpty();
    req.checkBody('password', 'Please enter user Password').notEmpty();
    req.checkBody('password', 'Password must be 6 to 20 characters in length').len(6,20);

    req.getValidationResult().then(function(result){
        if (!result.isEmpty()) {
            res.status(400).send({
                success: false,
                result: result.array()
            });
            return;
        }
        next();
    });
}

exports.validateBasicAuth = function (req, res, next) {
    var auth = req.headers['authorization'];

    var uname = {
        param: "username",
        msg: "Please provide your Username"
    };

    var pword = {
        param: "password",
        msg: "Please provide your Password"
    }

    if (!auth) {
        res.status(401).send({
            response: {
                result: [uname, pword],
                msg: '',
                success: false
            },
            statusCode: 401
        });
    } else if (auth) {
        var tmp = auth.split(' ');
        var buf = new Buffer(tmp[1], 'base64');
        var plain_auth = buf.toString();
        var creds = plain_auth.split(':');
        var username = creds[0];
        var password = creds[1];

        if (_.isEmpty(username) && _.isEmpty(password)) {
            res.status(401).send({
                response: {
                    result: [uname, pword],
                    msg: '',
                    success: false
                },
                statusCode: 401
            });
        } else if (_.isEmpty(username) && !_.isEmpty(password)) {
            res.status(401).send({
                response: {
                    result: [uname],
                    msg: '',
                    success: false
                },
                statusCode: 401
            });
        } else if (!_.isEmpty(username) && _.isEmpty(password)) {
            res.status(401).send({
                response: {
                    result: [pword],
                    msg: '',
                    success: false
                },
                statusCode: 401
            });
        } else if (username == 'undefined' && password == 'undefined') {
            res.status(401).send({
                response: {
                    result: [uname, pword],
                    msg: '',
                    success: false
                },
                statusCode: 401
            });
        } else if (!_.isEmpty(username) && password == 'undefined') {
            res.status(401).send({
                response: {
                    result: [pword],
                    msg: '',
                    success: false
                },
                statusCode: 401
            });
        } else if (username == 'undefined' && !_.isEmpty(password)) {
            res.status(401).send({
                response: {
                    result: [uname],
                    msg: '',
                    success: false
                },
                statusCode: 401
            });
        } else {
            next();
        }
    }
};