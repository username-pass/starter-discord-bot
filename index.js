const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
    console.log('FBB Online!');
});

client.on('message', msg => {
    if (msg.author === client.user) return;
    let username = msg.author.id;
	let content = msg.content;
	let mentions = msg.mentions.users.entries()
				
	 msg.channel.send('username'+username+': content'+content+'mentions: '+mentions);

});

client.login(settings.token);
