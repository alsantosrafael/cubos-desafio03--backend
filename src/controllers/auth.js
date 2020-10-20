const jwt = require('jsonwebtoken');
const response = require('../utils/response');

const User = require('../repositories/user');
const Password = require('../utils/password');

require('dotenv').config();

const autenticar = async (ctx) => {
	const { email = null, password = null } = ctx.request.body;
	if (!email || !password) {
		return response(ctx, 'Pedido mal formatado', 400);
	}

	const usuario = await User.obterUsuarioPorEmail(email);
	if (usuario) {
		const compara = await Password.checar(password, usuario.senha);
		if (compara) {
			const token = await jwt.sign(
				{ email: usuario.email },
				process.env.JWT_SECRET || 'vouserdev',
				{
					expiresIn: '1h',
				}
			);
			return response(ctx, { token }, 200);
		}
		return response(
			ctx,
			'Email e/ou Senha errad@s!',
			401,
			'Tente novamente'
		);
	}

	return response(ctx, 'Usuário não encontrado!', 404, 'Não há registro!');
};

module.exports = autenticar;
