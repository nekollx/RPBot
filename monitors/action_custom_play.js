var settings = require('../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');

exports.run = (client, msg) => {
	if (msg.content.startsWith('!play')){
		var arrayname = msg.content.split(' ');
			for (var i = 1; i < arrayname.length; i++){
				if (arrayname.length > 1){
					if (!msg.member.voiceChannel) {
							msg.reply(`Please be in a voice channel first!`);
					} else {
						settings.voiceChannel = msg.member.voiceChannel;
						msg.reply(`playing: ` + arrayname[i]);
						settings.array.push(arrayname[i]);
					};//if (!voiceChannel)
				}//if array is larger then 1
			}//for
    };//if  
};//run

exports.conf = {
  enabled: true,
};//conf