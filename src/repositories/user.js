const DB = require('../utils/database');

const obterUsuarioPorEmail = async (email) => {
	const query = {
		text: `SELECT * FROM users WHERE email = $1`,
		values: [email],
	};

	const result = await DB.query(query);
	return result.rows.shift();
};
module.exports = { obterUsuarioPorEmail };
