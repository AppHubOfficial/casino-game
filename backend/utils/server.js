const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

let players = [];

server.on('connection', (socket) => {
    players.push(socket);
    socket.on('message', (message) => {
        // Gestisci il messaggio ricevuto (es. distribuzione carte, aggiornamento puntate)
    });
    socket.on('close', () => {
        players = players.filter((player) => player !== socket);
    });
});
