import mysql from 'mysql2';
/* Configuração a conexão */
const conexao = mysql.createConnection({
    /* LOCAL
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola' */
    /* REMOTO */
    host: 'srv28.prodns.com.br',
    user: 'webmaio1_rafa-al',
    password: 'naolembrosenha',
    database: 'webmaio1_escola-rafa'

});
/* Conectando ao banco de dados */
/* conexao.connect(); */
conexao.connect(erro => {
    if(erro){
        console.error(`Erro ao conetar: ${erro.message}`);
    } else{
        console.log(`Banco de dados conectado em: ${conexao.config.host}!`);
    }
});
export default conexao;