const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    // Log that a new QR code has been generated
    console.log('New QR Code generated. Scan it quickly!');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// Function to introduce a delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

client.on('message', async message => {
    console.log(`Received message from: ${message.from}`);
    console.log(`Message content: ${message.body}`);

    const sender = '6XXXXXXX@c.us'; // Sender's WhatsApp number
    const recipient = '6XXXXXXX@c.us'; // Recipient's WhatsApp number

    if (message.from === sender) {
        // Introduce a delay before forwarding the message
        await delay(2000); // 2 seconds delay

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
