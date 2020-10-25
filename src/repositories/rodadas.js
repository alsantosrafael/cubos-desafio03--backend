/* eslint-disable camelcase */
const db = require('../utils/database');
/**
 * Função responsável por obter os jogos de uma rodada específica
 * direto do banco de dados
 */
const obterRodada = async (rodada) => {
	const query = {
		text: `SELECT * FROM jogos WHERE rodada = $1 ORDER BY id`,
		values: [rodada],
	};
	const result = await db.query(query);
	return result.rows;
};

/**
 * Função responsável por obter todos os jogos de todas as rodadas
 */
const obterRodadas = async () => {
	const query = {
		text: `SELECT * FROM jogos ORDER BY id`,
	};
	const result = await db.query(query);
	return result.rows;
};
/**
 * Função responsável por obter uma partida através do seu ID
 */
const obterJogoPorId = async (idJogo) => {
	const query = {
		text: `SELECT * FROM jogos WHERE id = $1`,
		values: [idJogo],
	};
	const result = await db.query(query);
	return result.rows.shift();
};
/**
 * Função responsável por realizar updates em um jogo específico
 */
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

const adicionarJogo = async (novoJogo) => {
	const {
		id,
		time_casa,
		time_visitante,
		gols_casa,
		gols_visitante,
		rodada,
	} = novoJogo;
	// const jogos = await obterRodadas();
	// const ultimoIdJogo = await jogos[jogos.length - 1].id;
	const query = {
		text: `INSERT INTO jogos
		(id, time_casa, time_visitante, gols_casa, gols_visitante, rodada)
		VALUES ($1, $2, $3, $4, $5 $6) RETURNING *`,
		values: [
			Number(id),
			time_casa,
			time_visitante,
			Number(gols_casa),
			Number(gols_visitante),
			Number(rodada),
		],
	};
	const result = await db.query(query);
	return result.rows.shift();
};

const deletarJogo = async (idJogo) => {
	const query = {
		text: `DELETE FROM jogos WHERE id = $1`,
		values: [idJogo],
	};
	await db.query(query);
	return true;
};

module.exports = {
	obterRodada,
	obterRodadas,
	atualizarJogo,
	obterJogoPorId,
	adicionarJogo,
	deletarJogo,
};
