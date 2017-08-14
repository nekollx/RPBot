var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
            msg.reply(`Welcome to Tokuuuuuuu Saturdaaaaaaaaaaaay!!!!!`);
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
  name: "saturday",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
