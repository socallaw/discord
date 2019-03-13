const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
 
});
client.on('message', message => {
    if (message.content === '+ping') {
    	message.reply('pong');
  	}
    client.on('message', message => {
    if (message.content === '+help') {
    	message.reply('Commands: +ping, +help, +owner');
    client.on('message', message => {
    if (message.content === '+owner') {
    	message.reply('<@478015111668432896> Is my master.');
  	}
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
