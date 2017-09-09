'use strict';

var BasicStrategy = require('passport-http').BasicStrategy;
var _ = require('lodash-node');

var mysql = require('mysql');
var Database = require('../app/utils/database').Database;
var db = new Database();

module.exports = (passport, jwt, config) => {
    passport.serializeUser(function(user,done){
        done(null, user);
    });

    passport.deserializeUser(function(user,done){
        done(null, user);
    });

    passport.use('user', new BasicStrategy(function(username,password,done){
        var strSQL = mysql.format('SELECT *, MD5(user_id) as _id FROM users WHERE username=? LIMIT 1',[username]);
        db.query(strSQL, verifyAuth(password,done));
    }));

    function verifyAuth(password, next){
        return function(err, user){
            if(err){
                return next(err);
            }

            if(_.isEmpty(user)){
                return next(null, {
                    msg:'User does not exist!',
                    success: false,
                    result: null
                });
            } else {
                user = user[0];
                if(password !== user.password){
                    return next(null,{
                        msg:'Invalid username or paassword',
                        success: false,
                        result: null
                    });
                }
                delete user.password;
                var token = jwt.sign(user,config.app_secretkey, {
                    expiresIn: "2d"
                });
                return next(null,{
                    msg: 'Login Successfully',
                    success: true,
                    result: {
                        user: user,
                        token: token
                    }
                });
            }
        }
    }

};