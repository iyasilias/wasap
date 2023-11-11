const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});
 

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true }); // Display QR code for authentication
});


client.on('ready', () => {
  console.log('Client is ready!');

  // Use Axios to send a message
  // const message = {
  //   phone: '60103345499', // Replace with the recipient's phone number
  //   text: 'Hello from WhatsApp API!', // Replace with your message
  // };

  // axios.post('https://api-url-for-whatsapp-api', message)
  //   .then((response) => {
  //     console.log('Message sent successfully:', response.data);
  //   })
  //   .catch((error) => {
  //     console.error('Error sending message:', error);
  //   });

  client.sendMessage( "120363176743494942@g.us", "ok");
});

client.on('message', message => {
	if(message.body === 'abah') {
		message.reply('pong');
	}
});
 

client.initialize();
