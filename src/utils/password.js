const bcrypt = require('bcryptjs');

const checar = async (senha, hash) => {
	const compara = await bcrypt.compare(senha, hash);
	return compara;
};
const encriptar = async (senha) => {
	const hash = await bcrypt.hash(senha, 10);
	console.log(hash);
	return hash;
};
module.exports = { checar, encriptar };
