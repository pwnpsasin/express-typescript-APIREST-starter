// tslint:disable-next-line
const Log = require('log');
// import * as Log from 'log';
import * as fs from 'fs';
import * as path from 'path';
export const logger = new Log('debug', 
  fs.createWriteStream(path.join('.', 'debuglogs', 'access-debug.log'), {
    'flags': 'a'
}));


