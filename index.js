const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });


client.on('message', msg => {
 if (msg.content === 'MYAAA') {
 msg.channel.send("", { files: ["./MYAAA.gif"] });
 }
 });

client.login('Njg3MjkxMDM2NjM2NDEzOTY1.XmjujA.WSaTha1vBKjRkJeX1kWP3BmTvbY');