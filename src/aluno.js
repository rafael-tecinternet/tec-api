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
export {ler};