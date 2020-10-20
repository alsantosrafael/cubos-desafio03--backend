const Router = require('koa-router');

const testa = require('./controllers/teste');
const Rodadas = require('./controllers/rodadas');

const router = new Router();

/*
 ** Definição de rotas
 */
router.post('/auth', testa);
router.get('/classificacao', Rodadas.obterTabelaOrdenada);
router.get('/jogos/:rodada', Rodadas.obterRodada);
router.post('/jogos', testa);

module.exports = router;
