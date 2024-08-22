# Whatsapp Message Forwarder by Firdaus

A simple WhatsApp bot that automatically forwards messages, including text, images, videos, and files, from a specified sender to a designated recipient.

## Features

- **Forward Text Messages**: Automatically forwards text messages from a specific sender.
- **Handle Media**: Supports forwarding images, videos, and files with optional captions.
- **Easy Setup**: Quick setup with QR code authentication.

## Requirements

- [Node.js](https://nodejs.org/) (v12 or higher)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) library
- WhatsApp account for authentication

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/whatsapp-forwarder-bot.git
   cd whatsapp-forwarder-bot

2. **Install dependencies**:
    ```bash
    npm install

## Configuration

1. **Edit the index.js file to configure the sender and recipient phone numbers:**:
    ```
    const sender = '601126660XXX@c.us'; // Replace with the sender's WhatsApp number
    const recipient = '60176204XXX@c.us'; // Replace with the recipient's WhatsApp number
    ```

2. **Run the bot**:
    ```bash
    node index.js

## Usage
  - The bot will listen for incoming messages from the specified sender.
  - Messages, including text and media, will be forwarded to the designated recipient.

## Contributing
  - Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](https://en.wikipedia.org/wiki/MIT_License) file for details.

## Contact
  - For any questions or issues, please open an issue on the repository or contact [me](mailto:firdaus@gmail.com).
