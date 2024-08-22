const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    // Generate and scan this QR code with your phone
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message', async message => {
    console.log(`Received message from: ${message.from}`);
    console.log(`Message content: ${message.body}`);

    const sender = '6XXXXXXXXXX@c.us'; // Sender's WhatsApp number
    const recipient = '6XXXXXXXXXX@c.us'; // Recipient's WhatsApp number

    if (message.from === sender) {
        if (message.hasMedia) {
            // Forward media (images, videos, documents)
            const media = await message.downloadMedia();
            client.sendMessage(recipient, media, { caption: message.body })
                .then(() => console.log(`Media message forwarded to ${recipient}`))
                .catch(err => console.error('Failed to forward media message:', err));
        } else {
            // Forward text only
            client.sendMessage(recipient, message.body)
                .then(() => console.log(`Text message forwarded to ${recipient}`))
                .catch(err => console.error('Failed to forward text message:', err));
        }
    }
});


client.initialize();
