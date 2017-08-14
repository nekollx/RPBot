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
                    if (msg.content.startsWith('!lego')){
                            msg.reply(`Okay! Playing something awesome in voice chat! (lego version)`);
                                PlayAudio("https://youtu.be/3DWB7CBdvXU", settings.voiceChannel);
                                settings.array.push("https://youtu.be/3DWB7CBdvXU");
                    } else if (msg.content.startsWith('!over')) {
                            msg.reply(`Okay! Playing something awesome in voice chat! (overlord version)`);
                                PlayAudio("https://youtu.be/1hozW87wd7A", settings.voiceChannel);
                                settings.array.push("https://youtu.be/1hozW87wd7A");
                    } else {
                            msg.reply(`Okay! Playing something awesome in voice chat! (random version)`);
                            if ((randomstoryID == 1) || (randomstoryID == 3) || (randomstoryID == 5)){
                                PlayAudio("https://youtu.be/3DWB7CBdvXU", settings.voiceChannel);
                                settings.array.push("https://youtu.be/3DWB7CBdvXU");
                            } else {
                                PlayAudio("https://youtu.be/1hozW87wd7A", settings.voiceChannel);
                                settings.array.push("https://youtu.be/1hozW87wd7A");
                            }//if else
                    };//if msg content
				};//if (!voiceChannel)
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["legoawesome", "overawesome"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "awesome",
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
