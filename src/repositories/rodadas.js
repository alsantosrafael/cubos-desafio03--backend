const db = require('../utils/database');

const obterRodada = async (rodada) => {
	const query = {
		text: `SELECT * FROM jogos WHERE rodada = $1`,
		values: [rodada],
	};
	const result = await db.query(query);
	return result.rows;
};

const obterRodadas = async () => {
	const query = {
		text: `SELECT * FROM jogos`,
	};
	const result = await db.query(query);
	return result.rows;
};

const obterJogos = async () => {
	const query = {
		text: `SELECT * FROM jogos`,
	};
	const result = await db.query(query);
	return result.rows;
};

const atualizarJogoRodada = async (id, jogoAtualizado) => {
	const { golsCasa, golsVisitante } = jogoAtualizado;
	const query = {
		text: `UPDATE jogos
		SET golsCasa = $1
		golsVisitante = $2
		WHERE id = $3 RETURNING *`,
		values: [golsCasa, golsVisitante, id],
	};
	const result = await db.query(query);
	return result.rows.shift();
};

module.exports = { obterRodada, obterRodadas, atualizarJogoRodada };
