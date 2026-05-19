const { Sequelize } =  require('sequelize');

const sequelize = new Sequelize('pessoa_cidade', 'root', 'root',{host:'localhost',port:3306,dialect:'mysql'});

try{
    sequelize.authenticate();
    console.log('Sucesso na conexão!');
}catch(error){
    console.error('Erro ao estabelecer conexão: ', error);
}

module.exports = sequelize;
