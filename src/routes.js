const Router = require('koa-router');

const Rodadas = require('./controllers/rodadas');
const autenticar = require('./controllers/auth');
const Sessao = require('./middlewares/session');

const router = new Router();

/*
 ** Definição de rotas
 */
router.post('/auth', autenticar);
router.get('/classificacao', Rodadas.obterTabelaOrdenada);
router.get('/jogos/:rodada', Rodadas.obterRodada);
router.post('/jogos', Sessao.verify, Rodadas.atualizarJogo);
router.get('/jogos', Rodadas.obterRodadas);

module.exports = router;
