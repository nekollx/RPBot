var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
	var vo = settings.voiceChannel;
	if (settings.array.length > 0) {
			msg.reply(`Okay removing: ` + settings.array[0] + ' from the que and leaving the channel.');
			if (typeof vo.leave === "function"){vo.leave();};
			settings.array.splice(0, 1);
	};//pop song
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 2,
  botPerms: [2],
  requiredFuncs: []
};

exports.help = {
  name: "popsong",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};