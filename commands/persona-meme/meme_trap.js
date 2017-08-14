var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
				if (!msg.member.voiceChannel) {
						msg.reply(`It's a trap. It's a trap. It's a trap.`);
				} else {
					settings.voiceChannel = msg.member.voiceChannel;
                            msg.reply(`It's a trap. It's a trap. It's a trap.`);
                                PlayAudio("https://youtu.be/4F4qzPbcFiA", settings.voiceChannel);
                                settings.array.push("https://youtu.be/4F4qzPbcFiA");
				};//if (!voiceChannel)
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "trap",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

function PlayAudio(tubelink, voice) {
    if (settings.botTalking == 0){
		  settings.botTalking = 1;
		voice.join()
		.then(connnection => {
			let stream = yt(tubelink, {audioonly: true});
			const dispatcher = connnection.playStream(stream);
			dispatcher.on('end', () => {
			settings.botTalking = 0;
			settings.array.splice(0, 1);
			});//dispatcher
		});//then connection
	}//if
}//function
