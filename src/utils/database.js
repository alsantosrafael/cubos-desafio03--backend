const { Client } = require('pg');
require('dotenv').config();
/**
 * Configuração do banco de dados. O cliente é responsável por
 * estabelecer conexão com o servidor do Heroku
 */
const client = new Client({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
	ssl: {
		rejectUnauthorized: false,
	},
});

client
	.connect()
	.then(() => console.log('connected'))
	.catch((err) => console.error('connection error', err.stack));

module.exports = client;
