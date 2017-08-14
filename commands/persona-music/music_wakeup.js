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
                    if (msg.content.startsWith('!ev')){
                            msg.reply(`But...I can't wake up. (evanencence version)`);
                                PlayAudio("https://youtu.be/jG-bJctQy9U", settings.voiceChannel);
                                settings.array.push("https://youtu.be/jG-bJctQy9U");
                    } else if (msg.content.startsWith('!kv')) {
                            msg.reply(`But...I can't wake up. (kiva version)`);
                                PlayAudio("https://youtu.be/DcBgPap85Ws", settings.voiceChannel);
                                settings.array.push("https://youtu.be/DcBgPap85Ws");
                    } else {
                            msg.reply(`But...I can't wake up. (random version)`);
                            if ((randomstoryID == 1) || (randomstoryID == 3) || (randomstoryID == 5)){
                                PlayAudio("https://youtu.be/jG-bJctQy9U", settings.voiceChannel);
                                settings.array.push("https://youtu.be/jG-bJctQy9U");
                            } else {
                                PlayAudio("https://youtu.be/DcBgPap85Ws", settings.voiceChannel);
                                settings.array.push("https://youtu.be/DcBgPap85Ws");
                            }//if else
                    };//if msg content
				};//if (!voiceChannel)
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["evwakeup", "kvwakeup"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "wakeup",
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
