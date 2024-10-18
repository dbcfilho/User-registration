# CRUD Application

Este repositório contém uma aplicação CRUD (Create, Read, Update, Delete) completa utilizando Node.js, MySQL e React. A aplicação é dividida em backend, frontend e banco de dados, e está configurada para ser executada em contêineres Docker.

## Visão Geral do Projeto

- **Backend**: Desenvolvido com Node.js e Express.js para gerenciar as operações CRUD.
- **Frontend**: Construído com React para uma interface de usuário dinâmica e responsiva.
- **Banco de Dados**: Utiliza MySQL para armazenamento de dados.

## Tecnologias Utilizadas

- Node.js
- Express.js
- React
- MySQL
- Docker
- Docker Compose

## Requisitos

- Docker e Docker Compose instalados na sua máquina.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/dbcfilho/crud.git
   cd crud

2. Construa e inicie os contêineres:
    ```bash
    docker-compose up --build

3. Acesse a aplicação:
- Frontend: http://localhost:3001
- Backend: http://localhost:3000
- MySQL: localhost:3306 (usuário: root, senha: yourpassword)

4. Estrutura do Projeto
- backend/: Código do servidor Node.js
- frontend/: Código do aplicativo React
- db/: Scripts do banco de dados MySQL
- docker-compose.yml: Arquivo de configuração do Docker Compose
