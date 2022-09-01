import conexao from "./banco.js";
/* Criando o CRUD */
/* Função que lê a tabela de alunos do BD */
function ler(res){
    const sql = "SELECT * from alunos ORDER BY nome";
    /* CONECTANDO AO Banco de dados */
    conexao.query(sql, (erro, resultados) => {
        if(resultados.length === 0) {
            res.status(204).end(); /* 204 = sem conteúdo. E .end() para qualquer comunicação */
            return; /* die() */
        }
        if(erro){
            res.status(400).json(erro.code); /* 400 BAD request - requisição inválida. */
        } else {
            res.status(200).json(resultados); /* Deu certo, exibir os resultados */
        }
    });
}
/* Inserindo Alunos */
function inserir(aluno, res){
    /* Set ? estão vindo do mysql2 e a ? recebe os dados e atribui na ordem. Proteção contra O injection e tratamento de strings vindos do modulo MYSQL2 */
    const sql = "INSERT INTO alunos SET ?"
    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            /* 201 - criado e apresenta a mensagem aluno inserido */
            res.status(201).json({"Status":"Aluno Inserido"});
            /* res.status(201).end(); */
        }
    })
}
/* Função exibe UM aluno */
function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        /* checando se existe conteúdo */
        if(resultados.length === 0) {
            res.status(204).end();
            return; 
        }
        /* if erro ou resultado */
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        };
    });
}
/* Atualizar aluno */
/* Essa função vai receber um id, os dados do aluno e res. */
function atualizar(id, aluno, res) {
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    /* para acessar mais de um parâmetro usamos o array. Dentro ele a ordem importa, pois precisa corresponder ao SQL acima. */
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            /* res.status(200).json({"status" : "Atualizado com sucesso!"}); */
            /* spread operator (operador de "espalhamento" de objeto) */
            res.status(200).json({...aluno, id});
        }
    })
}
/* Excluir alunos */
function excluir(id, res){
    const sql = "DELETE FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(2000000000000054)
        }
    })
}
export {ler, inserir, lerUm, atualizar, excluir};