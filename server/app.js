import path from 'path';
import architect from 'architect';

var configPath = path.join(__dirname, 'config','index.js');
var config = architect.loadConfig(configPath);

architect.createApp(config, function (err) {
  if(err) {
    throw err;
  }
});
