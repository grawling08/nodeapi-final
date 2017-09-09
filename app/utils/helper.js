'use strict';

module.exports = function(database, server, config, log) {
    database.connect(function onConnect(err, isConnected) {
        if (!isConnected) {
            log.error('ENVIRONMENT: ' + config.env + ' Error Connecting To MYSQL database');
        } else {
            server.listen(process.env.PORT || config.port, function connection(err) {
                if (err instanceof Error) {
                    log.error('ENVIRONMENT: ' + config.env + ' Unable to start Server', app.get('port'));
                } else {
                    log.info('ENVIRONMENT: ' + config.env + ' Server started at PORT: ' + config.port + ' Using API VERSION: ' + config.api_version);
                }
            });
        }
    });
};
