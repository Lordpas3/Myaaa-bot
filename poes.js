const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.content === 'MYAAA') {
        msg.channel.send("", { files: ["./MYAAA.gif"] });
    }
    if (msg.content === 'vibe' || 'kinglybounce') {
        msg.channel.send("", { files: ["./vibe.gif"] });
    }
});

client.login(process.env.BOT_TOKEN);