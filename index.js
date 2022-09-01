import express from "express";
import { ler, inserir, lerUm, atualizar, excluir } from "./src/aluno.js";
const app = express();
/* escolhe a porta que a hospedagem destinou para o banco */
const porta = process.env.PORT || 3000;
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
    /* res.send("Exibindo dados de um aluno."); */
    const id = parseInt(req.params.id);
    lerUm(id, res);
});
/* Rota (endpoint) para INSERIR aluno */
app.post('/alunos', (req, res) => {
    /* res.send("Inserindo alunos"); */
    /* capturando os dados a partir do corpo da requisição */
    const novoAluno = req.body;
    /* executando a função inserir e passando os parâmetros novoAluno e res */
    inserir(novoAluno,res);
});
/* Rota (endpoint) para atualizar TODOS os dados do aluno */
app.put('/alunos/:id', (req, res) => {
    res.send("Atualizando TODOS os dados do aluno");
});
/* Rota (endpoint) para excluir um único aluno */
app.patch('/alunos/:id', (req, res) => {
    /* res.send("Atualiza ALGUNS/todos os dados de um aluno"); */
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);

});
/* Rota (endpoint) para EXCLUIR aluno */
app.delete('/alunos/:id', (req, res) => {
    /* res.send("EXCLUIR aluno"); */
    const id = parseInt(req.params.id);
    excluir(id, res);
});



/* Configurando servidor */
app.listen(porta, () => {
    console.log('Servidor rodando....');
});

