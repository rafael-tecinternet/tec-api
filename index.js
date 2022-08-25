import express from "express";
import { ler } from "./src/aluno.js";
const app = express();
const porta = 3000;
/* Configurando suporte ao formato JSON */
app.use(express.json());
/* Configurando suporte a dados de inputs de formulários */
app.use(express.urlencoded({extended : true}));

/* Rotas */
/* Rota (endpoint) para a raíz da API */
app.get('/', (req, res) => {
    res.send(`Página Inicial da aplicação.`);
});
/* Rota (endpoint) para exibir todos os alunos */
app.get('/alunos', (req, res) => {
    /* res.send("Exibindo todos os alunos."); */
    ler(res);
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
app.put('/alunos/:id', (req, res) => {
    res.send("Atualizando TODOS os dados do aluno");
});
/* Rota (endpoint) para excluir um único aluno */
app.patch('/alunos/:id', (req, res) => {
    res.send("Atualiza ALGUNS/todos os dados de um aluno");
});
/* Rota (endpoint) para EXCLUIR aluno */
app.delete('/alunos/:id', (req, res) => {
    res.send("EXCLUIR aluno");
});



/* Configurando servidor */
app.listen(porta, () => {
    console.log('Servidor rodando....');
});

