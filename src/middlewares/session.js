const jwt = require('jsonwebtoken');
const response = require('../utils/response');

require('dotenv').config();

/**
 * Middleware responsável por verificar o token atrelado ao usuário no
 * início de sua sessão e garantir continuidade das funcionalidades de usuario
 */
const verify = async (ctx, next) => {
	const [, token] = ctx.headers.authorization.split(' ');

	try {
		const verificacao = await jwt.verify(token, process.env.JWT_SECRET);

		ctx.state.email = verificacao.email;
	} catch (err) {
		return response(ctx, 'Ação proibida', 403, 'Logue primeiro!');
	}
	return next();
};

module.exports = { verify };
