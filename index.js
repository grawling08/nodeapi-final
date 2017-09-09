'use strict';

process.env.TZ = 'UTC';

require('./config/env')();
var env = process.env.NODE_ENV || 'development';
process.env.NODE_ENV = env;


var application = require('./config/application'),
    express = require('express'),
    bunyan = require('bunyan'),
    mysql = require('mysql'),
    passport = require('passport'),
    ejwt = require('express-jwt'),
    jwt = require('jsonwebtoken'),
    middleware = require('./app/utils/middleware'),
    config = require('./config/environment/' + env),
    Database = require('./app/utils/database').Database,
    db = new Database(mysql, config),
    log = bunyan.createLogger({
        name: 'app_name_here'
    }),
    http = require('http'),
    app = express(),
    server = http.createServer(app);

var router = express.Router({
    strict: true,
    caseSensitive: true
});


require(application.utils + 'helper')(db, server, config, log);
require(application.config + 'express')(app, config, passport, ejwt);
require(application.config + 'passport')(passport, jwt, config);
require(application.config + 'authentication')(app, config, ejwt);
// Routes
require(application.routes + 'documents')(app, middleware);
require(application.routes + '/')(app, config, middleware, passport);

module.exports = app;
