/**
 * Função responsável por obter informações e formatar resposta à requisições
 */
const response = (ctx, dados, codeStatus = 200, mensagem = 'sucesso') => {
	const status = codeStatus >= 200 && codeStatus <= 399 ? 'sucesso' : 'erro';
	ctx.status = codeStatus;
	ctx.body = {
		status,
		dados: {
			dados,
			mensagem,
		},
	};
};

module.exports = response;
