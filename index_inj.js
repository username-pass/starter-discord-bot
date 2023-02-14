const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client()
const authtoken = process.env['authtoken']
const list = client.guilds.cache["899479806415106058"];
const fetch = require('node-fetch')
const fs = require('fs')
const http = require('http')
var prefix = "inj:"
//application has started
client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
})
console.clear();

//og code START
client.on("message", msg => {
	let username = msg.author.id;
	let content = msg.content;
	let mentions = msg.mentions.users.entries()
				
	 msg.channel.send('username'+username+': content'+content+'mentions: '+mentions);

	
})
client.on('message', message => {
	if (message.content.includes('[inject0r]', 'inj:')) {
		message.delete({ timeout: 3000 });
	}
	if (message.content.includes('inj:')) {
		message.delete({ timeout: 2000 });
	}
});
//og code END

//NEW CODE START

client.on('guildMemberAdd', member => {
  const embed = new Discord.MessageEmbed()
    embed.setTitle('hello')
						embed.setColor('')
						embed.setURL('https://inject0r.littleclaw.repl.co/')
						embed.setAuthor('hello2', 'https://inject0r.littleclaw.repl.co/logo.png');
						embed.setDescription('Welcome to the inject0r server, ${member.user}\nYou are our ${member.guild.memberCount}th Member.');
						embed.addFields(
							{ name: 'Get inject0r by DMing @littleclaw'},
							{ name: 'Register below at:', value: 'https://inject0r.littleclaw.repl.co/register' },
						)
						embed.setThumbnail('https://inject0r.littleclaw.repl.co/logo.png')
						embed.setTimestamp();
						embed.setFooter('ah yes, children so tasty', 'https://inject0r.littleclaw.repl.co/logo.png')
						member.send(embed);
})
//NEW CODE END

//DO NOT EDIT BELOW IDIOT
client.login(authtoken)
function requestListener(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// declare CORS policies and type of data
	if (req.headers["access-control-request-method"])
		res.setHeader('Access-Control-Allow-Methods', req.headers["access-control-request-method"]);
	if (req.headers['access-control-request-headers'])
		res.setHeader("Access-Control-Allow-Headers", req.headers['access-control-request-headers']);
	if (req.method.toLowerCase() === "options") {
		res.writeHead(200, "OK");
		res.end();
		return;
	}
	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin': '*'
	});

	res.write(fs.readFileSync('index.html', "utf8"))
	console.log(`${req.method} request recieved to site!`)
	res.end();
};
(function() {
	http.createServer(requestListener).listen(8080, () => console.log("Discord bot - web server initialized"));
})();
