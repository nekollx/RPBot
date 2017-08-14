var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
		var randomID = settings.getRandomInt(1, 32);
		var totalPhrases = 16;
				if (!msg.member.voiceChannel) {
					msg.reply(`Please be in a voice channel first!`);
				} else {
					var streamURL;
					if (msg.content.startsWith('!anythinggoes')){
							streamURL = '8VcjbO9OJCs';
							msg.reply('Anything goes. [1/'+totalPhrases+']');

					} else if (msg.content.startsWith('!livemore')){
							streamURL = '4Ni5QCpSkyk';
							msg.reply('Just Live More. [2/'+totalPhrases+']');

					} else if (msg.content.startsWith('!journey')){
							streamURL = 'PQoE_PEoFvM';
							msg.reply('You should take a Journey through the Decade. [3/'+totalPhrases+']');

					} else if (msg.content.startsWith('!allyouneed')){
							streamURL = 'AB1d0cnjOzM';
							msg.reply('All you need is Drive. [4/'+totalPhrases+']');

					} else if (msg.content.startsWith('!kita')){
							streamURL = 'GqKsFfxV0sE';
							msg.reply('UCHU KITAAAAAAAAAAA!\n....\nsorry...it\'s just...space is awesome...[5/'+totalPhrases+']');

					} else if (msg.content.startsWith('!firedup')){
							streamURL = '1Hqc_AMorug';
							msg.reply('Try getting fired up! [6/'+totalPhrases+']');

					} else if (msg.content.startsWith('!nobodysperfect')){
							streamURL = '8sGp16E6ySs';
							msg.reply('Nobody\'s Perfect. [7/'+totalPhrases+']');

					} else if (msg.content.startsWith('!castoff')){
							streamURL = 'ONZzHkT1nWA';
							msg.reply('I think it\'s time you CAST OFF that mask of yours. [8/'+totalPhrases+']');

					} else if (msg.content.startsWith('!gottabelive')){
							streamURL = 'gBTZxHnvcu4';
							msg.reply('You gotta belive. [9/'+totalPhrases+']');

					} else if (msg.content.startsWith('!excited')){
							streamURL = 'gBTZxHnvcu4';
							msg.reply('Get EXCITE...ed. [10/'+totalPhrases+']');

					} else if (msg.content.startsWith('!nofear')){
							streamURL = 'v0j46L2HE8A';
							msg.reply('No fear, no pain. [11/'+totalPhrases+']');

					} else if (msg.content.startsWith('!morphintime')){
							streamURL = '9wBid6HlGL8';
							msg.reply('It\'s morphin\' time. [12/'+totalPhrases+']');

					} else if (msg.content.startsWith('!breakthechain')){
							streamURL = 'mqdS8Ocqhik';
							msg.reply('Break the chain. [13/'+totalPhrases+']');

					} else if (msg.content.startsWith('!thereforweare')){
							streamURL = 'GX8HVXzV1E0';
							msg.reply('We think therefore we are. [14/'+totalPhrases+']');

					} else if (msg.content.startsWith('!mask')){
							streamURL = '0PAJPKYgd8A';
							msg.reply('Who needs a mask? [15/'+totalPhrases+']');

					} else if (msg.content.startsWith('!itsshowtime')){
							streamURL = '99Y8iXO-FhI';
							msg.reply('Life is showtime [16/'+totalPhrases+']');

					} else { 
						if ((randomID == 1) || (randomID == 32)){
								streamURL = '8VcjbO9OJCs';
								msg.reply('Anything goes. [1/'+totalPhrases+']');

						} else if ((randomID == 3) || (randomID == 30)){
								streamURL = '4Ni5QCpSkyk';
								msg.reply('Just Live More. [2/'+totalPhrases+']');

						} else if ((randomID == 5) || (randomID == 28)){
								streamURL = 'PQoE_PEoFvM';
								msg.reply('You should take a Journey through the Decade. [3/'+totalPhrases+']');

						} else if ((randomID == 7) || (randomID == 26)){
								streamURL = 'AB1d0cnjOzM';
								msg.reply('All you need is Drive. [4/'+totalPhrases+']');

						} else if ((randomID == 9) || (randomID == 24)){
								streamURL = 'GqKsFfxV0sE';
								msg.reply('UCHU KITAAAAAAAAAAA!\n....\nsorry...it\'s just...space is awesome...[5/'+totalPhrases+']');

						} else if ((randomID == 11) || (randomID == 22)){
								streamURL = '1Hqc_AMorug';
								msg.reply('Try getting fired up! [6/'+totalPhrases+']');

						} else if ((randomID == 13) || (randomID == 20)){
								streamURL = '8sGp16E6ySs';
								msg.reply('Nobody\'s Perfect. [7/'+totalPhrases+']');

						} else if ((randomID == 15) || (randomID == 18)){
								streamURL = 'ONZzHkT1nWA';
								msg.reply('I think it\'s time you CAST OFF that mask of yours. [8/'+totalPhrases+']');

						} else if ((randomID == 17) || (randomID == 16)){
								streamURL = 'gBTZxHnvcu4';
								msg.reply('You gotta belive. [9/'+totalPhrases+']');

						} else if ((randomID == 19) || (randomID == 14)){
								streamURL = 'gBTZxHnvcu4';
								msg.reply('Get EXCITE...ed. [10/'+totalPhrases+']');

						} else if ((randomID == 21) || (randomID == 12)){
								streamURL = 'v0j46L2HE8A';
								msg.reply('No fear, no pain. [11/'+totalPhrases+']');

						} else if ((randomID == 23) || (randomID == 10)){
								streamURL = '9wBid6HlGL8';
								msg.reply('It\'s morphin\' time. [12/'+totalPhrases+']');

						} else if ((randomID == 25) || (randomID == 8)){
								streamURL = 'mqdS8Ocqhik';
								msg.reply('Break the chain. [13/'+totalPhrases+']');

						} else if ((randomID == 27) || (randomID == 6)){
								streamURL = 'GX8HVXzV1E0';
								msg.reply('We think therefore we are. [14/'+totalPhrases+']');

						} else if ((randomID == 29) || (randomID == 4)){
								streamURL = '0PAJPKYgd8A';
								msg.reply('Who needs a mask? [15/'+totalPhrases+']');

						} else if ((randomID == 31) || (randomID == 2)){
								streamURL = '99Y8iXO-FhI';
								msg.reply('Life is showtime [16/'+totalPhrases+']');
						}//end if random number
					}//end if one of the direct calls
					settings.voiceChannel = msg.member.voiceChannel;
					streamURL = "https://www.youtube.com/watch?v="+streamURL
					PlayAudio(streamURL, settings.voiceChannel);
					settings.array.push(streamURL);
					msg.reply(streamURL);
				};//if (!msg.member.voiceChannel)
};//run



exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['anythinggoes', 'livemore', 'journey', 'allyouneed', 
  'firedup', 'kita', 'nobodysperfect', 'castoff', 'gottabelive', 
  'excited', 'nofear', 'morphintime', 'breakthechain', 'thereforweare', 
  'mask', 'itsshowtime'],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "advice",
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
