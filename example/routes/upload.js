import views from 'co-views';
import TVM from '../../lib/application';
import {config, samplePolicy} from '../config';
const render = views(__VIEW_PATH__, {
  map: {
    html: 'swig'
  }
});

export const upload = async (ctx, next) => {
    config.Policy = samplePolicy();
    const tvm = new TVM(config);
    const data = await tvm.getTemporaryCredentials();
    console.log(data);
    ctx.body = await render('upload', {data: data});
    ctx.type = 'text/html';
    await next();
};
