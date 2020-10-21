const bcrypt = require('bcryptjs');

/**
 * Função responsável por estabelecer a comparação da senha enviada pelo usuário
 * com a hash obtida do banco de dados
 */
const checarSenha = async (senha, hash) => {
	const compara = await bcrypt.compare(senha, hash);
	return compara;
};

module.exports = { checarSenha };
