var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
        var knight = "Robo Knight 'i' count is " + settings.robocount;
        var msgtlc = msg.content.toLowerCase(); 
        if (msgtlc.startsWith('clams')){
            knight = "Clams 'a' count is " + settings.robocount;
        };//if (msgtlc.startsWith('clams'))
        msg.reply(knight);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["clamscount"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "robocount",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
