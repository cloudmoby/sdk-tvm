import compress from 'koa-compress';
import logger from 'koa-logger';
import serve from 'koa-static';
import koa from 'koa';
import path from 'path';
const app = new koa();

import {router} from './routes';

// Logger
app.use(logger());

// Serve static files
console.log(path.join(__dirname, 'public'));
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

app.use(router.routes());

export default app.listen(__PORT__ || 3000);

if (__DEV_MODE__) {
  if (process.send) {
    process.send('online');
  }
}

console.info(`==> Server now is listening on port ${__PORT__}`);
