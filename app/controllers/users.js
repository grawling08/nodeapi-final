'use strict';

var usersDao = require('../daos/users');

var async = require('async');

function Users() {
    this.usersDao = usersDao;
}

Users.prototype.getAllUser = (next) => {
    usersDao.getAllUser((err, response) => {
        if (err) {
            next({
                success: false,
                msg: err,
                result: err
            }, null);
        }
        next(null,{
            success: true,
            message: '',
            result: response
        });
    });
};

Users.prototype.createUser = (data, next) => {
    async.waterfall([
        (callback) => {
            usersDao.checkUsernameDuplicate(data.username, (err, response) => {
                if (err) {
                    next({
                        success: false,
                        msg: err,
                        result: err
                    },null);
                }
                if (response && response.length > 0){
                    next(null,{
                        success: false,
                        msg: 'Username already existed',
                        result: null
                    });
                    return;
                } else {
                    callback();
                }
            });
        }, (callback) => {
            usersDao.createUser(data, function(err, response){
                next(null, {
                    success: true,
                    msg: 'Record successfully saved',
                    result: response
                });
            });
        }
    ], next);
};

Users.prototype.getUser = (user_id, next) => {
    usersDao.getUser(user_id, function(err, response){
        if (err) {
            next({
                success: false,
                msg: err,
                result: err
            }, null);
        }
        if (response && response.length > 0){
            response = response[0];
        }
        next(null,{
            success: true,
            message: '',
            result: response
        });			
    });
};

Users.prototype.deleteUser = (user_id, next) => {
    usersDao.deleteUser(user_id,function(err, response){
        if (err) {
            next({
                success: false,
                msg: err,
                result: err
            }, null);
        }
        next(null,{
            success: true,
            msg: 'User succesfully deleted',
            result: response
        });
    });
};

Users.prototype.updateUser = (user_id, data, next) => {
    async.waterfall([
        (callback) => {
            usersDao.checkUsernameDuplicate2(user_id, data.username, (err, response) => {
                if (err) {
                    next({
                        success: false,
                        msg: err,
                        result: err
                    }, null);
                }
                if (response && response.length > 0){
                    next({
                        success: false,
                        msg: 'Username already existed',
                        result: null
                    }, null);
                    return;
                } else {
                    callback();
                }
            });
        }, (callback) => {
            usersDao.updateUser(user_id, data, function(err, response){
                if (err) {
                    next({
                        success: false,
                        msg: err,
                        result: err
                    }, null);
                }
                next(null,{
                    success: true,
                    msg: 'Record successfully updated',
                    result: response
                });
            });
        }
    ], next);
};

exports.Users = Users;
