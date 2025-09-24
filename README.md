API de Lista de Tarefas - Trabalho de Recuperação

1. Descrição do Projeto
Este projeto é uma API REST simples, desenvolvida de forma individual com Node.js e Express, para gerenciar uma lista de tarefas (To-do list).

A API implementa as quatro funcionalidades básicas de CRUD:

Criar uma nova tarefa 

Listar todas as tarefas 

Atualizar uma tarefa existente pelo ID 

Excluir uma tarefa existente pelo ID 

Os dados são armazenados em memória, sem a necessidade de um banco de dados, e a comunicação entre cliente e servidor ocorre via JSON.

2. Pré-requisitos
Para executar este projeto, é necessário ter o Node.js instalado em sua máquina.

3. Como Rodar a Aplicação
Siga os passos abaixo para executar a API localmente.

a. Clone o repositório:
git clone https://github.com/androide147/api-lista-de-tarefas.git

b. Acesse a pasta do projeto:
cd api-lista-de-tarefas

c. Instale as dependências:
Este comando irá instalar as dependências do projeto, como o Express.
npm install

d. Inicie o servidor:
Este comando iniciará o servidor da aplicação.
node index.js

Após executar o último comando, o servidor estará rodando no endereço http://localhost:3000.

4. Rotas da API
A API possui 4 rotas disponíveis para o gerenciamento das tarefas:

Método	     Rota	               Descrição
POST	   /tarefas	       Cria uma nova tarefa. 

GET	       /tarefas	       Lista todas as tarefas existentes. 

PUT	     /tarefas/:id	   Atualiza uma tarefa específica pelo seu ID. 

DELETE	/tarefas/:id	   Exclui uma tarefa específica pelo seu ID. 


5. Exemplo de JSON
Para criar ou atualizar uma tarefa (nas rotas POST e PUT), o corpo da requisição deve seguir o formato JSON abaixo:

JSON
{
    "descricao": "Descrição da tarefa a ser realizada",
    "status": "pendente"
}

6. Como Testar no Postman
Para testar as rotas, é obrigatório o uso do Postman. Siga os passos:

Com o servidor rodando, abra o Postman.
Selecione o método HTTP (GET, POST, PUT, DELETE) e insira a URL da rota (ex: http://localhost:3000/tarefas).

Para 

POST e PUT, vá na aba Body, selecione raw e JSON, e insira o JSON de exemplo.

Clique em 

Send para executar a requisição.

7. Prints dos Testes
Abaixo estão os prints dos testes de cada uma das 4 operações CRUD, conforme exigido. 
As imagens estão localizadas na pasta: /prints 
