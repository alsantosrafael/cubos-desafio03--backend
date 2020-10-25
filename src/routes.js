const Router = require('koa-router');

const Rodadas = require('./controllers/rodadas');
const Autenticar = require('./controllers/auth');
const Sessao = require('./middlewares/session');

const router = new Router();

/*
 ** Definição de rotas
 */
router.post('/auth', Autenticar);
router.get('/classificacao', Rodadas.obterTabelaOrdenada);
router.get('/jogos/:rodada', Rodadas.obterRodada);
router.get('/jogos', Rodadas.obterRodadas);
router.put('/jogos', Sessao.verify, Rodadas.atualizarJogo);
router.post('/jogos', Sessao.verify, Rodadas.adicionarJogo);
router.delete('/jogos', Sessao.verify, Rodadas.deletarJogo);
module.exports = router;
