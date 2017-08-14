var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
            msg.reply(`Current Skyrim Special Edition Modlist (Kat'trina): https://drive.google.com/open?id=0BxeR8W9y9j_bem0xZ0pWVUduTXc`);
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
  name: "modssse",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
