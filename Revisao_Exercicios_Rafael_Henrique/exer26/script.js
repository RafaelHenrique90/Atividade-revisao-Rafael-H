// Importar a biblioteca ws
const WebSocket = require('ws');

// Criar um servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

// Armazenar as conexões dos clientes
const clients = [];

// Função para enviar mensagens para todos os clientes conectados
const broadcast = (message) => {
    clients.forEach((client) => {
        client.send(message);
    });
};

// Evento de conexão com o servidor WebSocket
wss.on('connection', (ws) => {
    // Adicionar o cliente à lista de clientes conectados
    clients.push(ws);

    // Evento de recebimento de mensagem do cliente
    ws.on('message', (message) => {
        // Enviar a mensagem recebida para todos os clientes
        broadcast(message);
    });

    // Evento de fechamento da conexão
    ws.on('close', () => {
        // Remover o cliente da lista de clientes conectados
        clients.splice(clients.indexOf(ws), 1);
    });
});
