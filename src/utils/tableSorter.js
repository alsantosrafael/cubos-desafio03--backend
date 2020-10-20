/**
 * Grupo de funções responsáveis por tratar as informações
 * das tabelas de todos os jogos e criar uma nova tabela
 * com a organizacao dos times segundo os critérios
 */
const tabelaFormatada = [];
/**
 * Função responsável por criar um array de objetos
 * contendo os times, suas vitorias, pontos, etc...
 */
const formataTabela = (nome, golsFeitos, golsSofridos, pontos) => {
	const flag = tabelaFormatada.findIndex((x) => x.nome === nome);

	if (flag === -1) {
		tabelaFormatada.push({
			nome,
			pontos,
			vitorias: pontos === 3 ? 1 : 0,
			derrotas: pontos === 0 ? 1 : 0,
			empates: pontos === 1 ? 1 : 0,
			golsFeitos,
			golsSofridos,
		});
		return;
	}

	tabelaFormatada[flag].pontos += pontos;
	tabelaFormatada[flag].vitorias += pontos === 3 ? 1 : 0;
	tabelaFormatada[flag].derrotas += pontos === 0 ? 1 : 0;
	tabelaFormatada[flag].empates += pontos === 1 ? 1 : 0;
	tabelaFormatada[flag].golsFeitos += golsFeitos;
	tabelaFormatada[flag].golsSofridos += golsSofridos;
};
/**
 * Função responsável por colocar os times em ordem segundo os
 * parâmetros e critérios passados
 */
const ordenaTabela = (times) => {
	const timesOrdenados = times.sort((timeA, timeB) => {
		if (timeB.pontos > timeA.pontos) return 1;
		if (timeA.pontos > timeB.pontos) return -1;
		if (timeB.vitorias > timeA.vitorias) return 1;
		if (timeA.vitorias > timeB.vitorias) return -1;
		if (timeB.saldo > timeA.saldo) return 1;
		if (timeA.saldo > timeB.saldo) return -1;
		if (timeB.golsFeitos > timeA.golsFeitos) return 1;
		if (timeA.golsFeitos > timeB.golsFeitos) return -1;
		return timeA.nome.localeCompare(timeB.nome);
	});
	return timesOrdenados;
};
/**
 * Função responsável por varrer a tabela de todos os jogos,
 * e tomar a decisao de criar objetos no array de tabelaFormatada
 * conforme os critérios passados
 */
const populaTabela = (jogos) => {
	jogos.forEach((jogo) => {
		if (jogo.gols_casa > jogo.gols_visitante) {
			formataTabela(
				jogo.time_casa,
				jogo.gols_casa,
				jogo.gols_visitante,
				3
			);
			formataTabela(
				jogo.time_visitante,
				jogo.gols_visitante,
				jogo.gols_casa,
				0
			);
		} else if (jogo.gols_visitante > jogo.gols_casa) {
			formataTabela(
				jogo.time_casa,
				jogo.gols_casa,
				jogo.gols_visitante,
				0
			);
			formataTabela(
				jogo.time_visitante,
				jogo.gols_visitante,
				jogo.gols_casa,
				3
			);
		} else {
			formataTabela(
				jogo.time_casa,
				jogo.gols_casa,
				jogo.gols_visitante,
				1
			);
			formataTabela(
				jogo.time_visitante,
				jogo.gols_visitante,
				jogo.gols_casa,
				1
			);
		}
	});

	return ordenaTabela(tabelaFormatada);
};

module.exports = populaTabela;
