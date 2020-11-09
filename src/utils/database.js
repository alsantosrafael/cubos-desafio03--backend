const { Client } = require('pg');
require('dotenv').config();
/**
 * Configuração do banco de dados. O cliente é responsável por
 * estabelecer conexão com o servidor do Heroku
 */
const client = new Client({
	connectionString: process.env.DB_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client
	.connect()
	.then(() => console.log('connected'))
	.catch((err) => console.error('connection error', err.stack));

module.exports = client;
