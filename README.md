<p align="center">
   <img src="https://blog.cubos.io/content/images/2019/02/cubosteste-1.png" />
</p>

Desafio de Backend do módulo 03 - Cubos Academy: Programação do Zero
================= 

Introdução
---
<p align="center">Este projeto consistiu no desenvolvimento de uma API RESTful para servir uma aplicação desenvolvida em React. A API consiste no fornecimento de dados da 
tabela de jogos do Brasileirão de 2019 e da classificação final dos times. A API permite visualização de cada rodada do campeonato, e visualização simultânea da
tabela de classificação de jogos. Além disso, desenvolveu-se um sitema de Login e Autenticação de usuário que, se feito corretamente, permite a edição dos jogos de todas as rodadas. A aplicação desenvolvida em ReactJS pode ser ser encontrada <a href="https://github.com/alsantosrafael/cubos-desafio03--frontend">aqui</a>.<p>

Tabela de Conteúdos
---
<p align="center>
 <a href="#uso">Instruções de uso</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#overview">Overview</a> •
 <a href="#autor">Autor</a> •
</p>

Status do projeto
---
<h4> 
	API Restful Desafio do módulo 03 está completa! ✔️🚀
</h4> <br>

Instruções de uso
---
1. Clone o repositorio de link https://github.com/alsantosrafael/cubos-desafio03--backend
2. Abra a pasta do repositório clonado no VSCode.
3. Execute o comando 'npm install' para instalar todas as depéndências que o projeto necessita.
4. Antes de executar a aplicação, execute o comando 'node ./src/utils/schema' para que a função "up()" seja executada. Essa função é responsável por criar as tabelas usadas na API.
5. Utilize o arquivo '.env-exemplo' para configurar o sistema a um servidor e hospedar seu banco de dados.
6. Por fim, execute node/nodemon index.js.
7. Aproveite.

obs.: Sugere-se a utilização do insomnia para o teste das funcionalidades.

Tecnologias e Dependências
---
<ul>
  <li>JavaScript</li>
  <li>NodeJS</li>
    <ul>
    <li><a href="https://www.npmjs.com/package/eslint" target="_blank">Eslint</a></li>
    <li><a href="https://www.npmjs.com/package/prettier" target="_blank">Prettier</a></li>
    <li><a href="https://www.npmjs.com/package/koa" target="_blank">Koa</a></li>
    <li><a href="https://www.npmjs.com/package/koa-bodyparser" target="_blank">Koa-bodyparser</a></li>
    <li><a href="https://www.npmjs.com/package/koa-router" target="_blank">Koa-router</a></li>
    <li><a href="https://www.npmjs.com/package/@koa/cors" target="_blank">@Koa-cors</a></li>
    <li><a href="https://www.npmjs.com/package/pg" target="_blank">Pg(Node Postgres)</a></li>
    <li><a href="https://www.npmjs.com/package/bcrypt" target="_blank">Bcrypt<a/></li>
    <li><a href="https://www.npmjs.com/package/nodemon" target="_blank">Nodemon(Opcional)</a></li>
    </ul>
</ul>

Overview
---
1. A raiz da pasta contém o arquivo de configuração do eslint (.eslintrc.js), configuração do prettier (prettierrc.js) e o index.js.
2. Em src, existe o arquivo de rotas.
3. As pastas em src são dividas em utils; funções de uso genérico ao longo da aplicação, repositories; funções que lidam com queries de acesso às informações do banco de dados,
middlewares, responsáveis pelo estabelecimento de sessão e controllers; responsáveis por formatar resultados de requisições para os usuários.
4. Nosso banco de dados e o schema de migrations são definidos em utils, bem como as funcionalidades de autenticação de usuário.

Autor
---

<a href="https://github.com/alsantosrafael/">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/60659321?s=460&u=f7b85d61e01a491287fce14c7e9bc0ee74475cc8&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Rafael Almeida</b></sub></a> <a href="https://github.com/alsantosrafael" title="Github">🚀</a>


Feito com ❤️ por Rafael Almeida 👋🏽 Entre em contato!

 [![Linkedin Badge](https://img.shields.io/badge/-Rafael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafaalms/)](https://www.linkedin.com/in/rafaalms/) 
[![Gmail Badge](https://img.shields.io/badge/-rafael.profeng@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rafael.profeng@gmail.com)](mailto:rafael.profeng@gmail.com)
