'use strict';

exports.setupResponseCallback = function(res) {

    return function(error, returnValue) {
        if (error) {
            return res.status(500).json({ response: error, statusCode: 500 });
        }

        res.status(200).json({ response: returnValue, statusCode: 200 });
    };
};
