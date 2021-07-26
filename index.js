const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.on('message', function (message) {
      return message.channel.send("test");
});

client.login(process.env.DISCORD_BOT_TOKEN);
