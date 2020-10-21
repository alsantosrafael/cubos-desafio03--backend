/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const DB = require('./database');
/**
 * Criando as migrations e o registro de todas as tabelas em nosso banco de dados
 */
const schema = {
	1: `CREATE TABLE IF NOT EXISTS jogos
	(
		id SERIAL,
		time_casa VARCHAR(255),
		time_visitante VARCHAR(255),
		gols_casa INT,
		gols_visitante INT,
		rodada INT
	);`,
	2: `CREATE TABLE IF NOT EXISTS users (
		id SERIAL,
		email VARCHAR(255),
		senha VARCHAR(255)
	);`,
	3: `INSERT INTO users
    (
		email, 
		senha
	) VALUES
    (
		'admin@cubos.academy', 
		'$2y$10$fhS97pz7JN24s9Ncr3wWx.IcyICfKXp1QzW46o7AXTzO.pPvMx.V6'
	);`,
	4: `INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 1, 2, 'Santos', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 1, 'Avaí', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 4, 0, 'CSA', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 4, 0, 'Fortaleza', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 2, 0, 'Botafogo', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 3, 1, 'Cruzeiro', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 0, 1, 'Goiás', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 2, 0, 'Inter-RS', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 3, 2, 'Corinthians', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 4, 1, 'Vasco', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 2, 1, 'Flamengo', 1);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 0, 'Ceará', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 1, 'Athletico-PR', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 0, 'Chapecoense', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 2, 1, 'Fluminense', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 2, 'Atlético-MG', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 3, 2, 'Bahia', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 1, 1, 'Grêmio', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 1, 2, 'São Paulo', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 1, 1, 'Palmeiras', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 4, 5, 'Fluminense', 2);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 2, 1, 'Goiás', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 1, 2, 'Atlético-MG', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 0, 'Inter-RS', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 1, 1, 'Flamengo', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 1, 'Corinthians', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 1, 0, 'Fortaleza', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 1, 'Athletico-PR', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 0, 'Avaí', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 0, 0, 'Santos', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 3, 1, 'Cruzeiro', 3);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 0, 2, 'Palmeiras', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 0, 1, 'São Paulo', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 0, 0, 'Grêmio', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 3, 0, 'Vasco', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 2, 1, 'Chapecoense', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 0, 1, 'Botafogo', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 0, 'CSA', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 2, 1, 'Ceará', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 0, 'Bahia', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 2, 0, 'CSA', 4);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 1, 'Flamengo', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 2, 1, 'Grêmio', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 4, 0, 'Santos', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 0, 0, 'Bahia', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 1, 'Avaí', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 4, 1, 'Cruzeiro', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 3, 'Fortaleza', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 1, 0, 'Botafogo', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 0, 2, 'Corinthians', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 1, 0, 'Atlético-MG', 5);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 2, 'Chapecoense', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 1, 1, 'Vasco', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 0, 'São Paulo', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 0, 0, 'Inter-RS', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 3, 2, 'Athletico-PR', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 0, 1, 'Palmeiras', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 1, 2, 'Ceará', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 3, 2, 'Fluminense', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 1, 0, 'Goiás', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 2, 0, 'Avaí', 6);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 4, 0, 'CSA', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 0, 1, 'Santos', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 2, 0, 'Goiás', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 1, 1, 'Cruzeiro', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 2, 0, 'Fortaleza', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 1, 0, 'Vasco', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 2, 'Palmeiras', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 0, 'Grêmio', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 3, 0, 'Fluminense', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 1, 0, 'Fortaleza', 7);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 0, 0, 'Corinthians', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 0, 0, 'Bahia', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 0, 'Athletico-PR', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 3, 1, 'Atlético-MG', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 2, 1, 'Inter-RS', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 0, 0, 'Flamengo', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 0, 'São Paulo', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 3, 1, 'Chapecoense', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 1, 2, 'Botafogo', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 3, 1, 'Bahia', 8);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 1, 1, 'São Paulo', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 1, 'Cruzeiro', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 2, 0, 'Avaí', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 1, 0, 'Corinthians', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 0, 'Ceará', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 0, 1, 'Grêmio', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 1, 'Fluminense', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 2, 1, 'Athletico-PR', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 0, 2, 'Flamengo', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 2, 1, 'Vasco', 9);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 0, 0, 'Botafogo', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 0, 'Avaí', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 0, 'CSA', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 1, 1, 'Palmeiras', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 6, 1, 'Goiás', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 1, 1, 'Ceará', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 2, 'Atlético-MG', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 0, 1, 'Santos', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 0, 'Inter-RS', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 1, 1, 'Grêmio', 10);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 2, 'Fortaleza', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 2, 0, 'Palmeiras', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 1, 'Flamengo', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 4, 0, 'Chapecoense', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 2, 1, 'Fluminense', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 0, 1, 'Santos', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 0, 'Goiás', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 0, 0, 'Cruzeiro', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 0, 4, 'Athletico-PR', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 1, 0, 'Ceará', 11);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 0, 2, 'Athletico-PR', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 1, 3, 'Corinthians', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 1, 'Vasco', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 3, 1, 'Avaí', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 3, 2, 'Botafogo', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 1, 2, 'São Paulo', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 0, 0, 'Bahia', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 0, 0, 'Atlético-MG', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 0, 0, 'Grêmio', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 3, 3, 'Chapecoense', 12);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 0, 'Cruzeiro', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 2, 1, 'Fortaleza', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 1, 'Palmeiras', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 6, 1, 'Goiás', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 0, 0, 'CSA', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 2, 1, 'Inter-RS', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 2, 'Botafogo', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 3, 0, 'Flamengo', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 0, 1, 'São Paulo', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 0, 0, 'Corinthians', 13);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 1, 'Fluminense', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 4, 1, 'Chapecoense', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 2, 2, 'Bahia', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 3, 2, 'Santos', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 3, 1, 'Grêmio', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 2, 1, 'Athletico-PR', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 2, 2, 'Cruzeiro', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 0, 1, 'Vasco', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 0, 2, 'Fortaleza', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 1, 1, 'Palmeiras', 14);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 2, 0, 'Santos', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 0, 1, 'Inter-RS', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 2, 0, 'Botafogo', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 1, 0, 'Ceará', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 4, 'Flamengo', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 0, 1, 'CSA', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 0, 'Avaí', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 1, 'Goiás', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 0, 'Atlético-MG', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 2, 1, 'Athletico-PR', 15);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 0, 1, 'Bahia', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 0, 3, 'Flamengo', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 3, 0, 'Fluminense', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 3, 3, 'Fortaleza', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 2, 0, 'São Paulo', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 0, 0, 'Chapecoense', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 1, 1, 'Corinthians', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 2, 1, 'Inter-RS', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 1, 1, 'Cruzeiro', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 3, 2, 'Botafogo', 16);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 0, 'Vasco', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 0, 'Goiás', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 0, 'Atlético-MG', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 0, 0, 'Grêmio', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 3, 0, 'Palmeiras', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 0, 1, 'Avaí', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 0, 1, 'Santos', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 0, 'CSA', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 0, 'Ceará', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 1, 0, 'São Paulo', 17);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 4, 'Grêmio', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 0, 1, 'Fluminense', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 2, 2, 'Ceará', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 1, 1, 'Athletico-PR', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 0, 2, 'Bahia', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 2, 1, 'Atlético-MG', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 3, 'Flamengo', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 1, 2, 'Palmeiras', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 2, 0, 'Chapecoense', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 3, 0, 'Goiás', 18);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 1, 3, 'Inter-RS', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 0, 0, 'Botafogo', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 0, 'Cruzeiro', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 1, 1, 'CSA', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 1, 0, 'Santos', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 1, 0, 'Corinthians', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 2, 'Vasco', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 1, 'Fortaleza', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 0, 1, 'Avaí', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 1, 0, 'Chapecoense', 19);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 2, 'Flamengo', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 0, 1, 'Palmeiras', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 2, 1, 'Bahia', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 0, 3, 'Grêmio', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 1, 'Athletico-PR', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 1, 2, 'São Paulo', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 1, 0, 'Atlético-MG', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 3, 0, 'Fluminense', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 1, 0, 'Ceará', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 6, 1, 'Avaí', 20);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 1, 2, 'Vasco', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 0, 0, 'Cruzeiro', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 6, 2, 'CSA', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 0, 1, 'Goiás', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 3, 1, 'Inter-RS', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 1, 1, 'Santos', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 0, 1, 'Corinthians', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 2, 0, 'Botafogo', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 2, 1, 'Fortaleza', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 1, 1, 'Palmeiras', 21);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 1, 'Ceará', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 1, 0, 'Botafogo', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 0, 'Vasco', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 2, 0, 'CSA', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 0, 0, 'São Paulo', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 2, 1, 'Grêmio', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 2, 'Bahia', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 1, 0, 'Cruzeiro', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 1, 'Chapecoense', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 0, 0, 'Corinthians', 22);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 1, 'Inter-RS', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 0, 1, 'Goiás', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 1, 'Atlético-MG', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 2, 1, 'Fortaleza', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 0, 1, 'Santos', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 0, 1, 'Fluminense', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 0, 1, 'Flamengo', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 2, 'Athletico-PR', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 3, 1, 'Avaí', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 2, 1, 'Ceará', 23);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 0, 0, 'Fluminense', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 0, 'Chapecoense', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 2, 2, 'Athletico-PR', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 2, 0, 'Palmeiras', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 3, 1, 'Atlético-MG', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 3, 1, 'Goiás', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 0, 'Vasco', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 0, 0, 'São Paulo', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 1, 0, 'Inter-RS', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 0, 0, 'Santos', 24);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 1, 4, 'Grêmio', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 1, 0, 'Avaí', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 0, 'Botafogo', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 1, 0, 'Corinthians', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 0, 'Fortaleza', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 2, 0, 'Bahia', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 1, 'Cruzeiro', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 1, 0, 'CSA', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 0, 2, 'Flamengo', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 0, 1, 'Bahia', 25);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 0, 'São Paulo', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 1, 2, 'Flamengo', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 0, 'Chapecoense', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 2, 1, 'Ceará', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 2, 1, 'Botafogo', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 1, 2, 'Athletico-PR', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 2, 'Inter-RS', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 2, 2, 'Corinthians', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 2, 2, 'Atlético-MG', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 0, 1, 'Vasco', 26);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 0, 'Santos', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 1, 'Grêmio', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 2, 'Cruzeiro', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 1, 0, 'Avaí', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 2, 0, 'Fluminense', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 2, 1, 'CSA', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 2, 2, 'Goiás', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 2, 'Ceará', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 1, 'Palmeiras', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 3, 0, 'Botafogo', 27);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 1, 'Fortaleza', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 1, 1, 'Vasco', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 0, 0, 'Santos', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 2, 0, 'Atlético-MG', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 1, 0, 'CSA', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 1, 1, 'Chapecoense', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 1, 2, 'Palmeiras', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 2, 3, 'Inter-RS', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 4, 1, 'Goiás', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 1, 1, 'Athletico-PR', 28);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 0, 2, 'Chapecoense', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 2, 0, 'Fluminense', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 3, 0, 'São Paulo', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 1, 0, 'Bahia', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 3, 'Grêmio', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 0, 2, 'Cruzeiro', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 1, 3, 'Fortaleza', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 2, 2, 'Flamengo', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 2, 1, 'Corinthians', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 2, 0, 'Inter-RS', 29);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 1, 1, 'Bahia', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 2, 'Atlético-MG', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 0, 'Ceará', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 4, 1, 'Botafogo', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 4, 1, 'Corinthians', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 0, 0, 'Vasco', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 0, 3, 'São Paulo', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 2, 0, 'Avaí', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 0, 'CSA', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 2, 1, 'CSA', 30);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 0, 'Goiás', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 2, 0, 'Inter-RS', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 3, 2, 'Fortaleza', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 0, 2, 'Fluminense', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 2, 'Palmeiras', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 0, 1, 'Flamengo', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 1, 2, 'Santos', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 1, 'Chapecoense', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 0, 0, 'Cruzeiro', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 2, 1, 'Fluminense', 31);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 0, 0, 'Atlético-MG', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 1, 0, 'Ceará', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 1, 'Corinthians', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 0, 1, 'Athletico-PR', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 3, 1, 'Bahia', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 2, 0, 'Avaí', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 0, 1, 'Grêmio', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 0, 3, 'Santos', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 0, 3, 'Vasco', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 0, 1, 'Flamengo', 32);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 0, 0, 'Avaí', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 3, 0, 'CSA', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 0, 0, 'Inter-RS', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 1, 1, 'São Paulo', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 1, 'Goiás', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 1, 1, 'Atlético-MG', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 1, 0, 'Ceará', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 1, 'Palmeiras', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 0, 'Botafogo', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 2, 2, 'Fortaleza', 33);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 0, 1, 'Athletico-PR', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 1, 1, 'São Paulo', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 2, 'Grêmio', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 4, 1, 'Cruzeiro', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 4, 4, 'Vasco', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 1, 0, 'Corinthians', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 1, 'Chapecoense', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 4, 3, 'Bahia', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 0, 1, 'Fluminense', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 1, 2, 'Goiás', 34);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 0, 1, 'CSA', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 1, 'Santos', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 3, 0, 'Avaí', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 1, 0, 'Vasco', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 4, 1, 'Ceará', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 1, 0, 'Palmeiras', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 0, 1, 'Botafogo', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 1, 'Atlético-MG', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 2, 0, 'Grêmio', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 3, 0, 'São Paulo', 35);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 1, 'Corinthians', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 1, 1, 'Athletico-PR', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 1, 3, 'Flamengo', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 2, 0, 'Chapecoense', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 0, 'Cruzeiro', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 0, 1, 'Inter-RS', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 1, 1, 'Fluminense', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 1, 2, 'Fortaleza', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 1, 2, 'Bahia', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Grêmio', 2, 0, 'Cruzeiro', 36);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Atlético-MG', 2, 0, 'Botafogo', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Ceará', 0, 1, 'Corinthians', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Palmeiras', 5, 1, 'Goiás', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('São Paulo', 2, 1, 'Inter-RS', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Flamengo', 6, 1, 'Avaí', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fluminense', 0, 0, 'Fortaleza', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Chapecoense', 3, 0, 'CSA', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Bahia', 1, 1, 'Vasco', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Athletico-PR', 1, 0, 'Santos', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Inter-RS', 2, 1, 'Atlético-MG', 37);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Cruzeiro', 0, 2, 'Palmeiras', 38);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Fortaleza', 2, 1, 'Bahia', 38);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Corinthians', 1, 2, 'Fluminense', 38);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Santos', 4, 0, 'Flamengo', 38);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Vasco', 1, 1, 'Chapecoense', 38);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Botafogo', 1, 1, 'Ceará', 38);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Avaí', 0, 0, 'Athletico-PR', 38);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('Goiás', 3, 2, 'Grêmio', 38);
INSERT INTO jogos
    (time_casa, gols_casa, gols_visitante, time_visitante, rodada)
VALUES
    ('CSA', 1, 2, 'São Paulo', 38);`,
};

/**
 * Função que elimina uma tabela
 */
const drop = async (tableName) => {
	if (tableName) {
		await DB.query(`DROP TABLE ${tableName}`);
		console.log('Tabela dropada!');
	}
};
/**
 * Função que define qual query existente em schema, com o numero respectivo
 * eu vou rodar. Se eu não passar um número, então todas as queries de schema
 * uma a uma serão rodadas.
 */
const up = async (num = null) => {
	if (!num) {
		for (const value in schema) {
			await DB.query({ text: schema[value] });
		}
	} else {
		await DB.query({ text: schema[num] });
	}
	console.log('Migração executada!');
};

up();

// drop('users');
