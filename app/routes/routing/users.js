'use strict';

var jwt = require('jsonwebtoken');
var ejwt = require('express-jwt');
var cb = require('./../../utils/callback');

var env = process.env.NODE_ENV || 'development';
var config = require('../../../config/environment/' + env);

var usersCtrl = require('../../controllers/users').Users;
var users = new usersCtrl();

exports.createUser = (req, res) => {
    users.createUser(req.body, cb.setupResponseCallback(res));
};

exports.getAllUser = (req, res) => {
    users.getAllUser(cb.setupResponseCallback(res));
};

exports.getUser = (req, res) => {
    users.getUser(req.params.user_id, cb.setupResponseCallback(res));
};

exports.deleteUser = (req, res) => {
    users.deleteUser(req.params.user_id, cb.setupResponseCallback(res));
};

exports.updateUser = (req, res) => {
    users.updateUser(req.params.user_id, req.body, cb.setupResponseCallback(res));
};

exports.login = (req, res) => {
    if(req.isAuthenticated()){
        res.status(200).json({
            response: req.user,
            statusCode: 200
        })
    } else {
        res.sendStatus(401);
    }
}

exports.currentUser = (req, res) => {
    console.log('currentuser');
    if(req.headers.authorization && req.headers.hasOwnProperty('authorization') && req.headers.authorization.split(' ')[0] === 'Bearer'){
        console.log('if headers');
        var token = req.headers.authorization.split(' ')[1];
        try{
            var decoded = jwt.verify(token, config.app_secretkey);
            console.log("decoded: " + decoded)
            users.getUser(decoded._id, (err, currUser) => {
                if(err){
                    res.status(400).json({
                        response: {
                            msg: err.message,
                            success: false,
                            result: err
                        }
                    });
                }
                delete currUser.result.password
                res.status(200).json({
                    response: currUser,
                    statusCode: 200
                });
            });
        } catch(err) {
            console.log(err);
        }
    } else {
        console.log('asdf');
        res.status(401).json({
            response: {
                msg: 'Invalid request.. Authorized token required',
                success: false,
                result: null
            }, 
            statusCode: 401
        }).end();
    }
}

exports.logout = (req, res) => {
    req.logout();
    delete req.session;
    
    ejwt({
        secret: config.app_secretkey,
        isRevoked: function(req, payload, done){
            console.log('token revoked')
        }
    });
    
    res.status(200).json({
        response: {
            msg: 'user successfuly logged out',
            success: true,
            result: null,
        }
    }).end();
}