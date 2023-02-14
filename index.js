require('dotenv').config()
const APPLICATION_ID = process.env.APPLICATION_ID 
const TOKEN = process.env.TOKEN 
const PUBLIC_KEY = process.env.PUBLIC_KEY || 'not set'
const GUILD_ID = process.env.GUILD_ID 

const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
    console.log('FBB Online!');
});

client.on("message", msg => {
	let username = msg.author.id;
	let content = msg.content;
	let mentions = msg.mentions.users.entries()
	 msg.channel.send('username'+username+': content'+content+'mentions: '+mentions);
})

client.login(settings.token);