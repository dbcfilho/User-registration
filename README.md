# User Registration  
  
Este repositório apresenta uma aplicação completa de registro de usuários, implementada com funcionalidades CRUD (Create, Read, Update, Delete) utilizando tecnologias modernas para o desenvolvimento de aplicações web.  
  
## Visão Geral do Projeto  
  
A aplicação foi projetada para oferecer uma experiência integrada, com backend robusto, frontend interativo e um banco de dados confiável. Sua arquitetura é dividida em três principais componentes:  
  
- **Backend**: Implementado com Node.js e Express.js, responsável pelo gerenciamento de requisições, rotas e lógica de negócios.  
- **Frontend**: Desenvolvido com React para proporcionar uma interface de usuário responsiva e moderna.  
- **Banco de Dados**: Utiliza MySQL como sistema de gerenciamento de banco de dados relacional para garantir a persistência dos dados.  
  
## Tecnologias Utilizadas  
  
As seguintes tecnologias foram empregadas no desenvolvimento da aplicação:  
  
- **Node.js**: Plataforma de execução para JavaScript no servidor.  
- **Express.js**: Framework web para Node.js, facilitando a criação de APIs RESTful.  
- **React**: Biblioteca JavaScript para a construção de interfaces de usuário interativas.  
- **MySQL**: Banco de dados relacional utilizado para armazenar os dados dos usuários de forma eficiente.  
  
## Como Executar o Projeto  
  
Siga os passos abaixo para configurar e executar a aplicação em sua máquina local:  
  
### 1. Clonar o Repositório  
  
Utilize o seguinte comando para clonar o repositório em sua máquina local:  
  
```bash  
git clone https://github.com/dbcfilho/User-registration.git  
cd User-registration  
```  
  
### 2. Configurar o Backend  
  
- Navegue até o diretório `backend/` e instale as dependências:  
```bash  
cd backend  
npm install  
```  
  
- Inicie o servidor Node.js:  
```bash  
npm start  
```  
  
### 3. Configurar o Frontend  
  
- Navegue até o diretório `frontend/` e instale as dependências:  
```bash  
cd ../frontend  
npm install  
```  
  
- Inicie a aplicação React:  
```bash  
npm start  
```  
  
### 4. Banco de Dados  
  
Certifique-se de ter o MySQL instalado e configurado em sua máquina. Execute os scripts do diretório `db/` para criar as tabelas e popular o banco de dados conforme necessário.  
  
### 5. Acessar a Aplicação  
  
- **Frontend**: Acesse em [http://localhost:3001](http://localhost:3001)  
- **Backend**: Acesse em [http://localhost:3000](http://localhost:3000)  
- **Banco de Dados MySQL**: Conecte-se em `localhost:3306` (usuário: `root`, senha: `yourpassword`)  
  
## Estrutura do Projeto  
  
A estrutura de diretórios do projeto está organizada da seguinte forma:  
  
```  
User-registration/  
│  
├── backend/  # Código-fonte do servidor Node.js (API REST)  
│  └── src/  # Arquivos de rotas, controladores, configurações e middleware  
│  
├── frontend/  # Código-fonte da aplicação React  
│  └── src/  # Componentes, páginas e configurações do aplicativo  
│  
└── db/  # Scripts para configuração do banco de dados MySQL  
```  

## Documentação
  
Segue link da documentação do projeto:  
[Documentação do Projeto](https://drive.google.com/file/d/1AjVWiS1mwsriBOvCiNVzwq81WgmmvCwY/view)

## Relatório

Segue link do relatório do projeto:  
[Relatório do Projeto](https://drive.google.com/file/d/1MhPOxL27IiWM52qX5mAE00vBH0U-igox/view)

## Licença  
  
Este projeto está sob a licença [MIT](LICENSE). Consulte o arquivo LICENSE para mais detalhes.

