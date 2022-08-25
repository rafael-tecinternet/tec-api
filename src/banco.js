import mysql from 'mysql2';
/* Configuração a conexão */
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});
/* Conectando ao banco de dados */
/* conexao.connect(); */
conexao.connect(erro => {
    if(erro){
        console.error(`Erro ao conetar: ${erro.message}`);
    } else{
        console.log(`Banco de dados conectado!`);
    }
});
export default conexao;