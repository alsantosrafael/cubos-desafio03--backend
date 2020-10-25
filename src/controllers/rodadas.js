/* eslint-disable camelcase */
const rodadasRepo = require('../repositories/rodadas');
const tableSorter = require('../utils/tableSorter');
const response = require('../utils/response');

/**
 * Função responsável por obter os jogos de uma rodada específica
 */
const obterRodada = async (ctx) => {
	const { rodada = null } = ctx.params;
	if (!rodada || rodada >= 39 || rodada < 1) {
		return response(
			ctx,
			'Mal formatado',
			400,
			'O campeonato brasileiro só possui 38 rodadas!'
		);
	}
	const jogos = await rodadasRepo.obterRodada(rodada);

	if (!jogos) {
		return response(ctx, 'Jogos da rodada não encontrados', 404, 'Erro');
	}
	return response(ctx, jogos, 200);
};
/**
 * Função responsável por obter a tabela ordenada final de times
 */
const obterTabelaOrdenada = async (ctx) => {
	const todosOsJogos = await rodadasRepo.obterRodadas();

	const timesOrdenados = await tableSorter(todosOsJogos);

	return response(ctx, timesOrdenados, 200);
};
/**
 * Função responsável por obter todos os jogos de todas as rodadas
 */
const obterRodadas = async (ctx) => {
	const todosOsJogos = await rodadasRepo.obterRodadas();
	return response(ctx, todosOsJogos, 200);
};

/**
 * Função responsável por atualizar o placar de um jogo
 */

const atualizarJogo = async (ctx) => {
	const { id = null, gols_casa, gols_visitante } = ctx.request.body;

	if (!gols_casa && !gols_visitante) {
		return response(
			ctx,
			'Pedido mal-formatado',
			400,
			'Insira pelo menos um novo placar'
		);
	}
	if (id) {
		const jogoAtual = await rodadasRepo.obterJogoPorId(id);

		if (jogoAtual) {
			const jogoAtualizado = {
				...jogoAtual,
				gols_casa: gols_casa || jogoAtual.gols_casa,
				gols_visitante: gols_visitante || jogoAtual.gols_visitante,
			};

			const result = await rodadasRepo.atualizarJogo(id, jogoAtualizado);
			return response(ctx, result, 200);
		}
		return response(ctx, 'Jogo não encontrado', 404, 'Não deve existir');
	}
	return response(ctx, 'Pedido mal-formatado', 400, 'Insira um ID');
};

const adicionarJogo = async (ctx) => {
	const {
		time_casa,
		time_visitante,
		gols_casa,
		gols_visitante,
		idRodada = null,
	} = ctx.request.body;

	if (
		!idRodada ||
		!time_casa ||
		!time_visitante ||
		!gols_casa ||
		!gols_visitante
	) {
		const todosJogos = await rodadasRepo.obterRodadas();
		const ultimoId = await todosJogos[todosJogos.length - 1].id;
		const jogosRodada = await rodadasRepo.obterRodada(idRodada);
		if (jogosRodada) {
			const result = rodadasRepo.adicionarJogo({
				id: ultimoId + 1,
				time_casa,
				time_visitante,
				gols_casa,
				gols_visitante,
				rodada: idRodada,
			});
			return response(ctx, result, 201, 'Jogo adicionado com sucesso!');
		}
		return response(ctx, 'Pedido mal formatado', 400, 'Rodada não existe');
	}
	return response(
		ctx,
		'Pedido mal formatado',
		400,
		'Insira todos os dados necessários'
	);
};

const deletarJogo = async (ctx) => {
	const { idJogo = null } = ctx.request.body;
	if (idJogo) {
		const existeJogo = await rodadasRepo.obterJogoPorId(idJogo);
		if (!existeJogo) {
			return response(
				ctx,
				'Pedido não encontrado!',
				404,
				'O id inserido não possui nenhum jogo cadastrado!'
			);
		}
		const jogoDeletado = await rodadasRepo.deletarJogo(Number(idJogo));
		if (!jogoDeletado) {
			return response(
				ctx,
				'Pedido não encontrado!',
				404,
				'O id inserido não possui nenhum jogo cadastrado!'
			);
		}
		return response(ctx, existeJogo, 200, 'Jogo foi deletado com sucesso!');
	}
	return response(ctx, 'Pedido mal formatado', 400, 'Insira um id válido');
};

module.exports = {
	obterRodada,
	obterTabelaOrdenada,
	atualizarJogo,
	obterRodadas,
	adicionarJogo,
	deletarJogo,
};
