const Discord = require('discord.js');
const client = new Discord.Client();
const token = "MjgwODM3NTg5MzAzMjk2MDEw.C4PN6w.Y2v3G9p02tcnilUmmh0PpCUngAU";
const ddiff = require('return-deep-diff');
client.on('ready', () => {
  console.log('I\'m Online\nI\'m Online');
});

// client.on('',''=>{});

client.on('guildDelete', guild => {
  console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`I have joined ${guild.name}`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please welcome ${member.user.username} to the server!`);
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please say goodbye to ${member.user.username} we will miss you!`);
});

client.on('guildMemberSpeaking', (member, speaking) => {
  let guild = member.guild;
  if (member.speaking) {
    guild.defaultChannel.sendMessage(`${member.user.username} is speaking!`);
  }
});

client.on('guildMemberUpdate',(oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
});

client.on('guildUpdate',(oGuild, nGuild) => {
  console.log(ddiff(oGuild, nGuild));
});

client.on('guildBanAdd',(guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just banned!`);
});

client.on('guildBanRemove',(guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just unbanned!`);
});


var prefix = "~"
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'join')) {
		let voiceChan = message.member.voiceChannel;
		if (!voiceChan || voiceChan.type !== 'voice') {
			message.channel.sendMessage('No').catch(error => message.channel.sendMessage(error));
		} else if (message.guild.voiceConnection) {
			message.channel.sendMessage('I\'m already in a voice channel');
		} else {
			message.channel.sendMessage('Joining...').then(() => {
				voiceChan.join().then(() => {
					message.channel.sendMessage('Joined successfully.').catch(error => message.channel.sendMessage(error));
				}).catch(error => message.channel.sendMessage(error));
			}).catch(error => message.channel.sendMessage(error));
		}
	} else

	if (message.content.startsWith(prefix + 'leave')) {
		let voiceChan = message.member.voiceChannel;
		if (!voiceChan) {
			message.channel.sendMessage('I am not in a voice channel');
		} else {
			message.channel.sendMessage('Leaving...').then(() => {
				voiceChan.leave();
			}).catch(error => message.channel.sendMessage(error));
		}
	}


  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  } else

  if (message.content.startsWith(prefix + 'send')) {
    client.channels.get('245491978601627648').sendMessage('Hello to the second channel!');
  } else

  if (message.content.startsWith(prefix + 'setgame')) {
    if (!result) {
      result = null;
    }
    client.user.setGame(result);
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
    if (!result) {
      result = 'online';
    }
    client.user.setStatus(result);
  } else

  if (message.content.startsWith(prefix + 'foo')) {
    message.channel.sendMessage('bar');
  }
});


client.login(token);
