var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
				if (!msg.member.voiceChannel) {
						msg.reply(`He's our hero!`);
				} else {
					settings.voiceChannel = msg.member.voiceChannel;
                            msg.reply(`He's our hero!`);
                                PlayAudio("https://youtu.be/AiEy5H40nLI", settings.voiceChannel);
                                settings.array.push("https://youtu.be/AiEy5H40nLI");
				};//if (!voiceChannel)
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["planet"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "captainplanet",
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
