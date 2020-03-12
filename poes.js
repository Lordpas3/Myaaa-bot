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


// Database connection

var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD
});

client.login(process.env.BOT_TOKEN);