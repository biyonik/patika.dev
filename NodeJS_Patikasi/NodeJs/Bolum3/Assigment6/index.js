const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/index', (context) => {
    context.body = '<h1>İndex Sayfası</h1>';
    context.status = 200;
});

router.get('/hakkimda', (context) => {
    context.body = '<h1>Hakkımda Sayfası</h1>';
    context.status = 200;
});

router.get('/iletisim', (context) => {
    context.body = '<h1>İletişim Sayfası</h1>';
    context.status = 200;
});

app.use(router.routes());

const hostname = '127.0.0.1';
const port = process.env.port || 3000;

app.listen(port, hostname, () => {
    console.log(`Sunucu şu adreste koşuyor: ${hostname}:${port}`);
});