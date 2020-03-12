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

const { DBClient } = require('pg');

const dbclient = new DBClient({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

dbclient.connect();

dbclient.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  dbclient.end();
});

client.login(process.env.BOT_TOKEN);