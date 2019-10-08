//Importa o modulo WebSocket baixado através do NPM (Node Packages Manager)
const WebSocket = require('ws');

//Inicializa um servidor e informa que a porta será 4000
const server = new WebSocket.Server({ port: 2000 });

const usuarios = [];

//Adiciona um listener para quando o servidor conectar
server.on('connection', server => {
    //Adiciona um listener para quando o servidor receber uma mensagem
    server.on('message', message => {
        //Adiciona usuario em arranjo de usuarios 
        usuarios.push(JSON.parse(message))
        //Responde para o cliente
        server.send('Dados recebidos com sucesso!');
    })
})