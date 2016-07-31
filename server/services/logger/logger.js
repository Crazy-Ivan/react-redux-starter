import _debug from 'debug';

export default function(options, imports, register) {

  const info = _debug('app:server:info');
  const error = _debug('app:server:error');

  function getOwn(name) {
    return _debug(`app:server:${name}`);
  }

  register(null, {
        logger: {
            info: info,
            error: error,
            getOwn: getOwn
        }
    })
};
