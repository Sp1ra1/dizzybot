const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '/'; // The prefix for your bot commands

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore messages from other bots
  if (!message.content.startsWith(prefix)) return; // Ignore messages without the prefix

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'hello') {
    message.reply('Hello!'); // Reply with a simple message
  } else if (command === 'ping') {
    message.reply('Pong!'); // Reply with "Pong!" for the ping command
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN'); // Replace with your Discord bot token
