const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Crear una sola instancia del cliente
const client = new Client();

// Manejar el evento 'qr'
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

// Manejar el evento 'ready'
client.on('ready', () => {
    console.log('Client is ready!');
});

// Manejar el evento 'message'
client.on('message', message => {
    // Verificar si el mensaje es un archivo de audio
    if (message.isMedia && message.type === 'audio') {
        console.log('Audio Received:', message);
    }
});

// Inicializar el cliente
client.initialize();
