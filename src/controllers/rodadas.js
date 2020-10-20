const rodadasRepo = require('../repositories/rodadas');

const tableSorter = require('../utils/tableSorter');
const response = require('../utils/response');

const obterRodada = async (ctx) => {
	const { rodada = null } = ctx.params;
	if (!rodada || rodada >= 39) {
		return response(
			ctx,
			'Mal formatado',
			400,
			'O campeonato brasileiro só possui 38 rodadas!'
		);
	}
	const jogos = await rodadasRepo.obterRodada(rodada);

	if (!jogos) {
		return response(ctx, 'Jogos da rodada não encontrados', 404);
	}
	return response(ctx, jogos, 200);
};

const obterTabelaOrdenada = async (ctx) => {
	const todosOsJogos = await rodadasRepo.obterRodadas();

	const timesOrdenados = await tableSorter(todosOsJogos);

	return response(ctx, timesOrdenados, 200);
};

const atualizarJogo = async (ctx) => {
	const { id = null } = ctx.params;
	const { golsCasa, golsVisitante } = ctx.request.body;
};

module.exports = { obterRodada, obterTabelaOrdenada };
