/* eslint-disable camelcase */
const db = require('../utils/database');

const obterRodada = async (rodada) => {
	const query = {
		text: `SELECT * FROM jogos WHERE rodada = $1 ORDER BY id`,
		values: [rodada],
	};
	const result = await db.query(query);
	return result.rows;
};

const obterRodadas = async () => {
	const query = {
		text: `SELECT * FROM jogos ORDER BY id`,
	};
	const result = await db.query(query);
	return result.rows;
};

const obterJogoPorId = async (idJogo) => {
	const query = {
		text: `SELECT * FROM jogos WHERE id = $1`,
		values: [idJogo],
	};
	const result = await db.query(query);
	return result.rows.shift();
};

const atualizarJogo = async (id, jogoAtualizado) => {
	const { gols_casa, gols_visitante } = jogoAtualizado;
	const query = {
		text: `UPDATE jogos
		SET gols_casa = $1,
		gols_visitante = $2
		WHERE id = $3 RETURNING *`,
		values: [gols_casa, gols_visitante, id],
	};
	const result = await db.query(query);
	return result.rows.shift();
};

module.exports = {
	obterRodada,
	obterRodadas,
	atualizarJogo,
	obterJogoPorId,
};
