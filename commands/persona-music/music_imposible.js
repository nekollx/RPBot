var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
		var randomstoryID = settings.getRandomInt(1, 6);
				if (!msg.member.voiceChannel) {
						msg.reply(`Please be in a voice channel first!`);
				} else {
					settings.voiceChannel = msg.member.voiceChannel;
                    msg.reply(`Okay! Na na naaaaaa.`);
                    PlayAudio("https://youtu.be/tGSUjuSBt1A", settings.voiceChannel);
                    settings.array.push("https://youtu.be/tGSUjuSBt1A");
				};//if (!voiceChannel)
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["imposible"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "impossible",
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
