var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
            msg.reply(`See this Video: https://www.youtube.com/watch?v=SMbM3nOC8Oo`);
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
  name: "installingmodssse",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
