import express from "express";
const app = express();
const porta = 3000;
/* Rotas */
/* Rota (endpoint) para a raíz da API */
app.get('/', (req, res) => {
    res.send(`É um dia lindo para aprender sobre APIs.`);
});
/* Rota (endpoint) para exibir todos os alunos */
app.get('/alunos', (req, res) => {
    res.send("Exibindo todos os alunos.");
});
/* Rota (endpoint) para exibir um único aluno */
app.get('/alunos/:id', (req, res) => {
    res.send("Exibindo dados de um aluno.");
});
/* Rota (endpoint) para INSERIR aluno */
app.post('/alunos', (req, res) => {
    res.send("Inserindo alunos");
});
/* Rota (endpoint) para atualizar TODOS os dados do aluno */
app.put('alunos/:id', (req, res) => {
    res.send("Atualizando TODOS os dados do aluno");
});
/* Rota (endpoint) para excluir um único aluno */
app.patch('alunos/:id', (req, res) => {
    res.send("Atualiza ALGUNS/todos os dados de um aluno");
});
/* Rota (endpoint) para EXCLUIR aluno */
app.delete('/alunos/:id', (req, res) => {
    res.send("EXCLUI aluno");
});



/* Configurando servidor */
app.listen(porta, () => {
    console.log('Servidor rodando....');
});

