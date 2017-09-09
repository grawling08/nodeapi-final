'use strict';

module.exports = function(app, config, ejwt){
    app.use(ejwt({
        secret: config.app_secretkey
    }).unless({
        path: [
            '/',
            '/docx',
            '/docx-v1',
            config.api_version + '/login',
        ]
    }));

    if(app.get('env') === 'development' || app.get('env') === 'staging'){
        app.use(function(err, req, res, next){
            if(err.name == 'UnauthorizedError'){
                res.status(401).json({
                    response: {
                        result: 'UnauthorizedError',
                        success: false,
                        msg: err.inner
                    },
                    statusCode: 401
                });
            } else {
                res.status(400).json({
                    response: {
                        result: err,
                        success: false,
                        msg: err.message
                    },
                    statusCode: 400
                });
            }
        });
    }
}