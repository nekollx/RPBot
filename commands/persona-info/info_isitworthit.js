var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
            msg.reply(`See this Video: https://www.youtube.com/watch?v=Qi3gsKxt3ZY`);
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
  name: "seworthit",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
