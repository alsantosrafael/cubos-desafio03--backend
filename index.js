const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

require('dotenv').config();

const server = new Koa();
const router = require('./src/routes');

const PORT = process.env.PORT || 8081;
server.use(bodyparser());

server.use(router.routes());

server.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}!`);
});
