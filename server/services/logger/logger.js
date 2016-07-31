import _debug from 'debug';

const info = _debug('app:server:info');
const error = _debug('app:server:error');


export default function(options, imports, register) {

    register(null, {
        logger: {
            info: info,
            error: error
        }
    })
};
//
//export { setup };
//var winston = require('winston');
//
//module.exports = function (options, imports, register) {
//
//
//    var exitOnError = options.exitOnError;
//    var logger = new winston.Logger({
//        transports: [],
//        exitOnError: (exitOnError || true)
//    });
//
//    var transports = options.transports||{};
//
//    for(var transport in transports) {
//        var transportOptions = transports[transport];
//
//        switch(transportOptions.type){
//            case 'console':
//                logger.add(winston.transports.Console, transportOptions);
//                break;
//            case 'file':
//                logger.add(winston.transports.File, transportOptions);
//                break;
//        }
//    }
//
//
//    register(null, {
//        logger: logger
//    });
//};