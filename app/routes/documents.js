'use strict';

var fs = require('fs-extra');

module.exports = function(app, middleware) {
    app.route('/docx')
        .get(function onRequest(req, res) {
            var file = 'docs/api/index.html';
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                }
                res.send(data);
            });
        });

    app.route('/docx-v1')
        .get(function onRequest(req, res) {
            var file = 'docs/api/swagger.json';
            console.log('file: ', file);
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                }
                data = JSON.parse(data);
                res.send(data);
            });
        });

};
