import views from 'co-views';
const render = views(__VIEW_PATH__, {
  map: {
    html: 'swig'
  }
});

export const home = async (ctx, next) => {
    ctx.body = await render('home');
    ctx.type = 'text/html';
    await next();
};
