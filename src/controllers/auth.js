const jwt = require('jsonwebtoken');
const response = require('../utils/response');

const User = require('../repositories/user');
const Password = require('../utils/password');

require('dotenv').config();
/**
 * Função responsável por receber um JSON no body, conferir as
 * credenciais (senha e email) através da função checar e garantir
 * ou não acesso ao usuário com um token de duração de uma hora
 */
const autenticar = async (ctx) => {
	const { email = null, password = null } = ctx.request.body;
	if (!email || !password) {
		return response(
			ctx,
			'Pedido mal formatado',
			400,
			'Insira o email e a senha!'
		);
	}

	const usuario = await User.obterUsuarioPorEmail(email);
	if (usuario) {
		const compara = await Password.checarSenha(password, usuario.senha);
		if (compara) {
			const token = await jwt.sign(
				{ email: usuario.email },
				process.env.JWT_SECRET || 'adoroacubos',
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

	return response(
		ctx,
		'Usuário não encontrado!',
		404,
		'Não há registro desse usuário!'
	);
};

module.exports = autenticar;
